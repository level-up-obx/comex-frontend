import { createCategory } from "../modelo.js";
import { categoryList, saveCategory } from "../api.js";

const categoryName = document.querySelector("");
const button = document.querySelector("");
const form = document.querySelector("");

const getCategoryName = (e) => {
  e.preventDefault();
  let category = createCategory(categoryName.value);
  saveCategory(category);
  console.log(categoryList());
  categoryName.value = "";
  categoryName.focus();
};

form.onsubmit = getCategoryName;
button.addEventListener("click", (event) => {
  getCategoryName(event);
});
