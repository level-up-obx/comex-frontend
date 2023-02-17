import { createCategory } from "../modelo.js";
import { categoryList, saveCategory } from "../api.js";

const categoryName = document.querySelector("#category-name");
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

form.addEventListener("submit", (event) => {
  getCategoryName(event);
});
button.addEventListener("click", (event) => {
  getCategoryName(event);
});
