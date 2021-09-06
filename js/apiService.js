import {refs} from "./refs";
import imagesList from "/templates/list.hbs"
import PNotifyMobile from '../node_modules/@pnotify/mobile';
import {defaultModules, error} from '../node_modules/@pnotify/core';
import {clearImgList, scrollInto} from "./utils";

defaultModules.set(PNotifyMobile, {});

export const api = {
  searchQuery: "",
  KEY: '23101955-6369c6792be6f6752905e3e3e',
  BASE_URL: 'https://pixabay.com/api/',
  page: 1,
  orientation: 'all',
  imgType: 'all'
}

export const onSearch = (e) => {
  e.preventDefault();
  if (refs.input.value === "") {
    error({
      text: "Your query is empty! Type something brother!",
      delay: 3000,
    })
    return
  }
  if (api.searchQuery !== refs.input.value) {
    clearImgList()
    api.page = 1
  }
  api.searchQuery = refs.input.value;

  fetch(`${api.BASE_URL}?image_type=${api.imgType}&orientation=${api.orientation}&page=${api.page}&per_page=12&key=${api.KEY}&q=${api.searchQuery}`)
    .then(response => {
      incrementPage()
      return response.json()
    })
    .then(({hits}) => {
      if (api.page === 1) {
        clearImgList()
      }
      const markup = imagesList(hits)
      refs.gallery.insertAdjacentHTML("beforeend", markup)
    })
    .then(scrollInto)
    .then(loadMoreBtn)
    .catch(error => console.log(error))
}

export const incrementPage = () => {
  api.page += 1;
}
export const resetPage = () => {
  api.page = 1;
}

export function loadMoreBtn() {
  refs.loadMoreBtn.classList.add("is-visible")
  refs.loadMoreBtn.classList.remove("is-invisible")
}
