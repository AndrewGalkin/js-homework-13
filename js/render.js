import {refs} from "./refs";
import {fetchImages, renderImages} from "/js/apiService"


refs.searchForm.addEventListener("submit", onSearch)

function onSearch(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const searchQuery = form.elements.query.value;
  fetchImages(searchQuery)
    .then(renderImages)
    .catch(error => console.log(error))

}