import { authors } from "./data.js";

export const html = {
  headerButtons: {
    search: document.querySelector("[data-header-search]"),
    settings: document.querySelector("[data-header-settings]"),
  },
  list: {
    items: document.querySelector("[data-list-items]"),
    messages: document.querySelector("[data-list-messages]"),
    button: document.querySelector("[data-list-button]"),
  },
  overlay: {
    active: document.querySelector("[data-list-active]"),
    blur: document.querySelector("[data-list-blur]"),
    image: document.querySelector("[data-list-image]"),
    title: document.querySelector("[data-list-title]"),
    subtitle: document.querySelector("[data-list-subtitle]"),
    description: document.querySelector("[data-list-description]"),
    close: document.querySelector("[data-list-close]"),
  },
  searchOverlay: {
    overlay: document.querySelector("[data-search-overlay]"),
    form: document.querySelector("[data-search-form]"),
    title: document.querySelector("[data-search-title]"),
    genres: document.querySelector("[data-search-genres]"),
    authors: document.querySelector("[data-search-authors]"),
    cancel: document.querySelector("[data-search-cancel]"),
  },
  settingsOverlay: {
    overlay: document.querySelector("[data-settings-overlay]"),
    form: document.querySelector("[data-settings-form]"),
    theme: document.querySelector("[data-settings-theme]"),
    cancel: document.querySelector("[data-settings-cancel]"),
  },
};
//The HTML element is the instructions but still needs to receive data to apply those instruction to
// What's needed to create one preview
export const createBookHtml = (preview) => {
  const { id, title, image, author } = preview;

  const element = document.createElement("div");
  element.className = "preview";
  element.dataset.id = id;

  element.innerHTML = /* html */ `

    <img class="preview__image" src=${image} alt="Book Cover"></img>
    
    <div class="preview__info"> 
    <div class="preview__title">${title}</div>
    <div class="preview__author">${authors[author]}</div>
    
    </div>

  `;
  return element;
};
