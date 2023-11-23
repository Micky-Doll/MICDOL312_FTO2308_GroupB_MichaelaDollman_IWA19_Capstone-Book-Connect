// matches = books
// page = 1;

// if (!books && !Array.isArray(books)) throw new Error('Source required')
// if (!range && range.length < 2) throw new Error('Range must be an array with two numbers')

// day = {
//     dark: '10, 10, 20',
//     light: '255, 255, 255',
// }

// night = {
//     dark: '255, 255, 255',
//     light: '10, 10, 20',
// }

// fragment = document.createDocumentFragment()
// const extracted = books.slice(0, 36)

// for ({ author, image, title, id }; extracted; i++) {
//     const preview = createPreview({
//         author,
//         id,
//         image,
//         title
//     })

//     fragment.appendChild(preview)
// }

// data-list-items.appendChild(fragment)

// genres = document.createDocumentFragment()
// element = document.createElement('option')
// element.value = 'any'
// element = 'All Genres'
// genres.appendChild(element)

// for ([id, name]; Object.entries(genres); i++) {
//     document.createElement('option')
//     element.value = value
//     element.innerText = text
//     genres.appendChild(element)
// }

// data-search-genres.appendChild(genres)

// authors = document.createDocumentFragment()
// element = document.createElement('option')
// element.value = 'any'
// element.innerText = 'All Authors'
// authors.appendChild(element)

// for ([id, name];Object.entries(authors); id++) {
//     document.createElement('option')
//     element.value = value
//     element = text
//     authors.appendChild(element)
// }

// data-search-authors.appendChild(authors)

// data-settings-theme.value === window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'night' : 'day'
// v = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches? 'night' | 'day'

// documentElement.style.setProperty('--color-dark', css[v].dark);
// documentElement.style.setProperty('--color-light', css[v].light);
// data-list-button = "Show more (books.length - BOOKS_PER_PAGE)"

// data-list-button.disabled = !(matches.length - [page * BOOKS_PER_PAGE] > 0)

// data-list-button.innerHTML = /* html */ [
//     '<span>Show more</span>',
//     '<span class="list__remaining"> (${matches.length - [page * BOOKS_PER_PAGE] > 0 ? matches.length - [page * BOOKS_PER_PAGE] : 0})</span>',
// ]

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

html.headerButton.search.addEventListener(
  "click",
  console.log("Open up book searching overlay")
);
html.headerButton.settings.addEventListener(
  "click",
  console.log("Open up settings menu overlay")
);

html.list.items.addEventListener();
html.list.messages.addEventListener();
html.list.button.addEventListener(
  "click",
  console.log("Not really sure what this one is doing")
);

html.overlay.active.addEventListener();
html.overlay.blur.addEventListener();
html.overlay.image.addEventListener();
html.overlay.title.addEventListener();
html.overlay.subtitle.addEventListener();
html.overlay.description.addEventListener();
html.overlay.close.addEventListener(
  "click",
  console.log("Closes the individually viewed book overlay")
);

html.searchOverlay.overlay.addEventListener();
html.searchOverlay.form.addEventListener(
  "submit",
  console.log("search the database for books meeting set criteria")
);
html.searchOverlay.title.addEventListener(
  "click",
  console.log("Engage text box to enter title of book being searched")
);
html.searchOverlay.genre.addEventListener(
  "click",
  console.log("Open dropdown menu for genres")
);
html.searchOverlay.authors.addEventListener(
  "click",
  console.log("Open dropdown menu of authors")
);
html.searchOverlay.cancel("click", console.log("Close search menu overlay"));
/* Is there a way to make it so that if the author or genre is selected first, the other eliminates either 
genres not applicable to that author or authors who do not write that genre from their respective dropdown menus. */

html.settingsOverlay.overlay.addEventListener();
html.settingsOverlay.form.addEventListener(
  "submit",
  console.log("Saves chosen settings")
);
html.settingsOverlay.theme.addEventListener(
  "click",
  console.log("Opens dropdown menu to choose between day or night mode")
);
html.settingsOverlay.cancel.addEventListener(
  "click",
  console.log("Exits the settings menu without saving settings")
);
