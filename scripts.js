import { books, BOOKS_PER_PAGE, genres, authors, state } from "./data.js";
import { createBookHtml, html } from "./view.js";

state.pageNumber = 1;

if (!books && !Array.isArray(books)) throw new Error("Source required");

const themeSetting = {
  day: {
    dark: "10, 10, 20",
    light: "255, 255, 255",
  },
  night: {
    dark: "255, 255, 255",
    light: "10, 10, 20",
  },
};

// Show More Button
const createButtonText = (array) => {
  if (array.length === 0) {
    html.list.button.disabled = true;
    html.list.button.innerHTML = `
Show More <span class="list__remaining">(${0})</span>
`;
  } else {
    html.list.button.disabled = false;
    html.list.button.innerHTML = `
    Show More <span class="list__remaining">(${
      array.length - Object.keys(state.loaded).length
    })</span>`;
  }
};

/**
 * Making a fragment to house our data element and loop it; Giving the information to the createHTML function to run instructions on
 * Everything that needs to happen to create multiple previews
 * Giving the function an editable parameter (array) to create books depending on necessity
 */

const createBookList = (array) => {
  const startPosition = (state.pageNumber - 1) * BOOKS_PER_PAGE;
  const endPosition = startPosition + BOOKS_PER_PAGE;

  const fragment = document.createDocumentFragment();
  const extracted = array.slice(startPosition, endPosition); // Accounting for arrays starting at 0

  for (let i = 0; i < extracted.length; i++) {
    const bookInfo = extracted[i];
    state.booksLoaded[bookInfo.id] = bookInfo;
    const preview = createBookHtml(bookInfo); // preview = what createBookHtml returns
    fragment.appendChild(preview);
  }

  state.pageNumber += 1;

  html.list.items.appendChild(fragment);
  createButtonText(array);
};

// Dropdown menu for Authors
const createAuthorOptions = () => {
  const fragment = document.createDocumentFragment();

  const defaultOption = document.createElement("option");
  defaultOption.value = "any";
  defaultOption.innerText = "All Authors";
  fragment.appendChild(defaultOption);

  let authorIdArray = Object.keys(authors);
  for (let i = 0; i < authorIdArray.length; i++) {
    const id = authorIdArray[i];
    const option = document.createElement("option");
    option.value = id;
    option.innerText = authors[id];
    fragment.appendChild(option);
  }

  html.searchOverlay.authors.appendChild(fragment);
};

// Dropdown menu for Genres
const createGenreOptions = () => {
  const fragment = document.createDocumentFragment();

  const defaultOption = document.createElement("option");
  defaultOption.value = "any";
  defaultOption.innerText = "All Genres";
  fragment.appendChild(defaultOption);

  let genreIdArray = Object.keys(genres);
  for (let i = 0; i < genreIdArray.length; i++) {
    const id = genreIdArray[i];
    const option = document.createElement("option");
    option.value = id;
    option.innerText = genres[id];
    fragment.appendChild(option);
  }

  html.searchOverlay.genres.appendChild(fragment);
};

// Things to happen when the page first loads
createBookList(books);
createAuthorOptions();
createGenreOptions();

// Checking and matching local browser preferences for theme
if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  state.theme = "night";
}

// Event Handlers
const handleSearchToggle = (event) => {
  event.preventDefault();
  html.searchOverlay.overlay.toggleAttribute("open");
};

const handleSettingsToggle = (event) => {
  html.settingsOverlay.overlay.toggleAttribute("open");
};

/**
 * Gets ID value from the click event and uses it to get the information to be used in the overlay
 */

const handleItemClick = (event) => {
  event.preventDefault();
  html.overlay.active.toggleAttribute("open");

  let idValue = null;

  if (
    [
      "preview",
      "preview__image",
      "preview__info",
      "preview__author",
      "preview__title",
    ].includes(event.srcElement.classList[0])
  ) {
    const path = event.path || event.composedPath();
    for (const element of path) {
      const { id } = element.dataset;
      if (id) {
        idValue = id;
        break;
      }
    }
  }

  const published = new Date(state.booksLoaded[idValue].published);

  html.overlay.blur.setAttribute("src", state.booksLoaded[idValue].image);
  html.overlay.image.setAttribute("src", state.booksLoaded[idValue].image);
  html.overlay.title.innerText = state.booksLoaded[idValue].title;
  html.overlay.subtitle.innerText = `${
    authors[state.booksLoaded[idValue].author]
  } (${published.getFullYear()})`;
  html.overlay.description.innerText = state.booksLoaded[idValue].description;
};

const handleShowMore = () => {
  createBookList(books);
};

// Day/Night Mode Toggle

const handleSettingsSubmit = (event) => {
  event.preventDefault();
  const theme = event.target[0].value;

  if (theme === "night") {
    state.theme = "dark";
  } else {
    state.theme = "light";
  }

  document.documentElement.style.setProperty(
    "--color-dark",
    themeSetting[theme].dark
  );
  document.documentElement.style.setProperty(
    "--color-light",
    themeSetting[theme].light
  );

  handleSettingsToggle();
};

// Event Listeners
html.headerButtons.search.addEventListener("click", handleSearchToggle);

html.searchOverlay.cancel.addEventListener("click", handleSearchToggle);

html.headerButtons.settings.addEventListener("click", handleSettingsToggle);
html.settingsOverlay.cancel.addEventListener("click", handleSettingsToggle);

html.list.items.addEventListener("click", handleItemClick);
html.overlay.close.addEventListener("click", handleItemClick);
html.list.button.addEventListener("click", handleShowMore);

html.settingsOverlay.form.addEventListener("submit", handleSettingsSubmit);
