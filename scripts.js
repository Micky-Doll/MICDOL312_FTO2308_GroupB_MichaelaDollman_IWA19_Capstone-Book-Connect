// matches = books
// page = 1;

// if (!books && !Array.isArray(books)) throw new Error('Source required')

// day = {
//     dark: '10, 10, 20',
//     light: '255, 255, 255',
// }

// night = {
//     dark: '255, 255, 255',
//     light: '10, 10, 20',
// }

// documentElement.style.setProperty('--color-dark', css[v].dark);
// documentElement.style.setProperty('--color-light', css[v].light);

// data-search-cancel.click() { data-search-overlay.open === false }
// data-settings-cancel.click() { querySelect(data-settings-overlay).open === false }
// data-settings-form.submit() { actions.settings.submit }
// data-list-close.click() { data-list-active.open === false }

// data-list-button.click() {
//     document.querySelector([data-list-items]).appendChild(createPreviewsFragment(matches, page x BOOKS_PER_PAGE, {page + 1} x BOOKS_PER_PAGE]))
//     actions.list.updateRemaining()
//     page = page + 1
// }

// data-header-search.click() {
//     data-search-overlay.open === true ;
//     data-search-title.focus();
// }

// data-search-form.click(filters) {
//     preventDefault()
//     const formData = new FormData(event.target)
//     const filters = Object.fromEntries(formData)
//     result = []

//     for (book; booksList; i++) {
//         titleMatch = filters.title.trim() = '' && book.title.toLowerCase().includes[filters.title.toLowerCase()]
//         authorMatch = filters.author = 'any' || book.author === filters.author

//         {
//             genreMatch = filters.genre = 'any'
//             for (genre; book.genres; i++) { if singleGenre = filters.genre { genreMatch === true }}}
//         }

//         if titleMatch && authorMatch && genreMatch => result.push(book)
//     }

//     if display.length < 1
//     data-list-message.class.add('list__message_show')
//     else data-list-message.class.remove('list__message_show')

//     data-list-items.innerHTML = ''
//     const fragment = document.createDocumentFragment()
//     const extracted = source.slice(range[0], range[1])

//     for ({ author, image, title, id }; extracted; i++) {
//         const { author: authorId, id, image, title } = props

//         element = document.createElement('button')
//         element.classList = 'preview'
//         element.setAttribute('data-preview', id)

//         element.innerHTML = /* html */ `
//             <img
//                 class="preview__image"
//                 src="${image}"
//             />

//             <div class="preview__info">
//                 <h3 class="preview__title">${title}</h3>
//                 <div class="preview__author">${authors[authorId]}</div>
//             </div>
//         `

//         fragment.appendChild(element)
//     }

//     data-list-items.appendChild(fragments)
//     initial === matches.length - [page * BOOKS_PER_PAGE]
//     remaining === hasRemaining ? initial : 0
//     data-list-button.disabled = initial > 0

//     data-list-button.innerHTML = /* html */ `
//         <span>Show more</span>
//         <span class="list__remaining"> (${remaining})</span>
//     `

//     window.scrollTo({ top: 0, behavior: 'smooth' });
//     data-search-overlay.open = false
// }

// data-settings-overlay.submit; {
//     preventDefault()
//     const formData = new FormData(event.target)
//     const result = Object.fromEntries(formData)
//     document.documentElement.style.setProperty('--color-dark', css[result.theme].dark);
//     document.documentElement.style.setProperty('--color-light', css[result.theme].light);
//     data-settings-overlay).open === false
// }

// data-list-items.click() {
//     pathArray = Array.from(event.path || event.composedPath())
//     active;

//     for (node; pathArray; i++) {
//         if active break;
//         const previewId = node?.dataset?.preview

//         for (const singleBook of books) {
//             if (singleBook.id === id) active = singleBook
//         }
//     }

//     if !active return
//     data-list-active.open === true
//     data-list-blur + data-list-image === active.image
//     data-list-title === active.title

//     data-list-subtitle === '${authors[active.author]} (${Date(active.published).year})'
//     data-list-description === active.description
// }

import { books, BOOKS_PER_PAGE, genres, authors, state } from "./data.js";
import { createBookHtml, html } from "./view.js";

state.pageNumber = 1;

if (!books && !Array.isArray(books)) throw new Error("Source required");

const themeCSS = {
  day: {
    dark: "10, 10, 20",
    light: "255, 255, 255",
  },
  night: {
    dark: "255, 255, 255",
    light: "10, 10, 20",
  },
};

const createButtonText = (array) => {
  html.list.button.innerHTML = /* html */ `
    <span>Show more</span>
    <span class="list__remaining"> (${
      array.length - Object.keys(state.booksLoaded).length
    })</span>
`;
  // data-list-button.disabled = !(matches.length - [page * BOOKS_PER_PAGE] > 0)
};

// Making a fragment to house our data element and loop it; Giving the information to the createHTML function to run instructions on
// Everything that needs to happen to create multiple previews
// Giving the function an editable parameter (array) to create books depending on necessity
const createBookList = (array) => {
  const startPosition = (state.pageNumber - 1) * BOOKS_PER_PAGE;
  const endPosition = startPosition + BOOKS_PER_PAGE;

  const fragment = document.createDocumentFragment();
  const extracted = array.slice(startPosition, endPosition); // Accounting for arrays starting at 0

  for (let i = 0; i < extracted.length; i++) {
    const bookInfo = extracted[i];
    state.booksLoaded[bookInfo.id] = bookInfo;
    // state.loaded[id] = {id, image, author, title, description, publish}
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
  event.preventDefault();
  html.settingsOverlay.overlay.toggleAttribute("open");
};

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

// Event Listeners
html.headerButtons.search.addEventListener("click", handleSearchToggle);

// html.searchOverlay.form.addEventListener(
//   "submit",
//   console.log("search the database for books meeting set criteria")
// );

html.searchOverlay.cancel.addEventListener("click", handleSearchToggle);

html.headerButtons.settings.addEventListener("click", handleSettingsToggle);
html.settingsOverlay.cancel.addEventListener("click", handleSettingsToggle);

html.list.items.addEventListener("click", handleItemClick);
html.overlay.close.addEventListener("click", handleItemClick);
html.list.button.addEventListener("click", handleShowMore);

html.settingsOverlay.form.addEventListener(
  "submit",
  console.log("Saves chosen settings")
);
html.settingsOverlay.theme.addEventListener(
  "click",
  console.log("Opens dropdown menu to choose between day or night mode")
);
