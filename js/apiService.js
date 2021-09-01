import {refs} from "./refs";
// import {createLi} from "./templates-string-helper";
import imageList from "/templates/list.hbs"
const api = {
  searchQuery: '',
  KEY: '23101955-6369c6792be6f6752905e3e3e',
  BASE_URL: 'https://pixabay.com/api/',
  page: 1,
  orientation: 'all',
  imgType: 'all'
}
const MAIN_URL = `${api.BASE_URL}?image_type=${api.imgType}&orientation=${api.orientation}&page=${api.page}&per_page=12&key=${api.KEY}&q=${api.searchQuery}`



export function fetchImages() {
  return fetch(MAIN_URL).then(
    response => {
      return response.json()
    }
  )
}
export function renderImages({hits}) {
  refs.gallery.innerHTML = imageList(hits);
}
//
// export function ImagesApiService(e) {
//   e.preventDefault();
//   const form = e.currentTarget;
//   const searchQuery = form.elements.query.value;
//   fetch(MAIN_URL)
//     .then(response => response.json())
//     .then(({hits}) => {
//       const markup = imageList(hits)
//       refs.gallery.innerHTML = markup;
//     })
//     .catch(error => console.log(error))
//
// }


