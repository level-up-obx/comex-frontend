import { createCategory } from "../modelo.js";
import { categoryList, saveCategory } from "../api.js";

const categoryName = document.querySelector("#category-name");
const form = document.querySelector("#category-form");

const editButton = document.querySelector("#editButton")
const deleteButton = document.querySelector("#deleteButton")
const newCategoryName = document.querySelector("#newCategoryName")
const idCategory = document.querySelector("#editModal")


const categoryTable = document.querySelector("#category-table");

const getCategoryName = (e) => {
  let category = createCategory(categoryName.value);
  saveCategory(category);
  categoryName.value = "";
  categoryName.focus();
};

const createRow = (category) => {
  categoryTable.innerHTML += `
      <tr>
        <td scope="row" class="table-dark">${category.name}</td>
        <td class="table-dark">${category.status}</td>
        <td class="table-dark">${category.createdAt}</td>
        <td class="table-dark"><i class='bx bx-trash bx-sm trash' data-bs-toggle="modal" data-bs-target="#deleteModal" ></i> <i class='bx bx-edit bx-sm edit' data-bs-toggle="modal" data-bs-target="#editModal" ></i> <i class='bx bx-info-circle bx-sm desactivate'></i></td>
      </tr>
    `;
}

const categoriesOnLocalStorage = JSON.parse(localStorage.getItem("categories"))
if(categoriesOnLocalStorage != null) {
  categoriesOnLocalStorage.forEach((category) => {
    createRow(category);
  });
} else {
  const categories = await categoryList();
  localStorage.setItem("categories", JSON.stringify(categories))
  categories.forEach((category) => {
    createRow(category);
  });
}

form.addEventListener("submit", (event) => {
  getCategoryName(event);
});

editButton.addEventListener("click", (e) => {
  console.log(e.target)
})