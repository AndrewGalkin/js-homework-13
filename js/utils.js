import {refs} from "./refs";


export function clearImgList() {
  refs.gallery.innerHTML = "";
  refs.loadMoreBtn.classList.add("is-invisible")
}

export function resetAll() {
  clearImgList(refs);
  refs.loadMoreBtn.classList.remove("is-visible")
  refs.loadMoreBtn.classList.add("is-invisible")
  refs.input.value = "";
}

export function scrollInto (){
  refs.loadMoreBtn.scrollIntoView({block: "end", behavior: "smooth"})
}



