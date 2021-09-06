import {refs} from "/js/refs"

refs.gallery.addEventListener("click", openModal)
refs.closeModal.addEventListener("click", closeModal)
refs.modalOverlay.addEventListener("click", closeModalByOverlay)

export function openModal(e) {
  if (e.target.classList.contains("main-img")) {
    refs.modal.classList.add("is-open")
    refs.modalImage.src = e.target.parentNode.parentNode.dataset.url;
    refs.body.classList.add("overflow")
  }
}

export function closeModal(el) {
  el.preventDefault()
  refs.modal.classList.remove("is-open")
  refs.modalImage.src = "";
  refs.body.classList.remove("overflow")

}

export function closeModalByOverlay(el) {
  el.preventDefault()
  refs.modal.classList.remove("is-open")
  refs.modalImage.src = "";
  refs.body.classList.remove("overflow")

}



