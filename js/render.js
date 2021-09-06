import {refs} from "./refs";
import {onSearch} from "./apiService";
import {resetAll} from "./utils";



refs.searchForm.addEventListener("submit", onSearch);
refs.resetBtn.addEventListener("click", () => resetAll())







