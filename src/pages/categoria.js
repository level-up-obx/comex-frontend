import { createCategory } from "../modelo.js";
import { categoryList, deleteCategory, editCategory, saveCategory } from "../api.js";

const categoryName = document.querySelector("#category-name");
const form = document.querySelector("#category-form");
const categoryTable = document.querySelector("#category-table");
const categoriesOnLocalStorage = JSON.parse(localStorage.getItem("categories"))

const getCategoryName = () => {
  const category = createCategory(categoryName.value);
  saveCategory(category);
  categoryName.value = "";
  categoryName.focus();
};

const createRow = (category) => {
  categoryTable.innerHTML += `
    <tr>
      <td scope="row" class="table-dark">${category.name}</td>
      <td class="table-dark px-0">${category.status}</td>
      <td class="table-dark px-0">${category.createdAt}</td>
      <td class="table-dark px-0 d-flex justify-content-center"><i id="delete-${category.id}" class='bx bx-trash bx-sm text-danger' data-bs-toggle="modal" data-bs-target="#deleteModal"></i> <i id="edit-${category.id}" class='bx bx-edit bx-sm text-success' data-bs-toggle="modal" data-bs-target="#editModal" ></i> <i id="desactive-${category.id}" class='bx bx-info-circle bx-sm text-warning'></i></td>
    </tr>
  `;
}


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

const deleteButtons = document.querySelectorAll('i[id^="delete-"]')
deleteButtons.forEach((input) => {
  input.addEventListener('click', () => {
    document.querySelector("#deleteButton").addEventListener("click", () => {
      deleteCategory(input.id.slice(7, 50))
    })
  })
});

const editButtons = document.querySelectorAll('i[id^="edit-"]')
const newCategoryName = document.querySelector('#newCategoryName')
editButtons.forEach((input) => {
  input.addEventListener('click', () => {
    document.querySelector("#editButton").addEventListener("click", () => {
      editCategory(newCategoryName.value, input.id.slice(5, 50))
    })
  })
});

form.addEventListener("submit", () => {
  getCategoryName();
});