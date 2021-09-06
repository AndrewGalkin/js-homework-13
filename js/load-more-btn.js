import {refs} from "/js/refs"
import {loadMoreBtn, onSearch} from "./apiService";
import {scrollInto} from "./utils";

refs.loadMoreBtn.addEventListener("click", onSearch)
refs.loadMoreBtn.addEventListener("click", loadMoreBtn)
refs.loadMoreBtn.classList.add("is-invisible")
refs.loadMoreBtn.addEventListener("click", scrollInto)

