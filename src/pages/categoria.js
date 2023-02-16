import { createCategory } from "../modelo.js";
import { categoryList, saveCategory } from "../api.js";

const categoryName = document.querySelector("#first-name");
const button = document.querySelector("#category-button");
const form = document.querySelector("#category-form");

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
