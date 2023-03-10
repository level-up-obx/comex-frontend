import { Category } from "./../../ts/model";
import { saveCategory, listCategory } from "../../ts/api.js";

const name: HTMLInputElement = <HTMLInputElement>(
  document.getElementById("category__name")
);
const form: HTMLFormElement = <HTMLFormElement>(
  document.getElementById("category__form")
);
const table: HTMLTableElement = <HTMLTableElement>(
  document.getElementById("category-table")
);
const getLocalStorage: Array<Category> = JSON.parse(
  localStorage.getItem("categories")!
);

export function createTableRow(category: Category): string {
  return `
        <tr>
            <td scope="row" class="table-dark">${category.name}</td>
            <td class="table-dark">${category.status}</td>
            <td class="table-dark">${category.createdAt}</td>
            <td class="table-dark d-flex justify-content-center"><i class='bx bx-trash bx-sm text-danger'></i></td>
      </tr>
    `;
}

if (getLocalStorage) {
  getLocalStorage.forEach((category) => {
    table.innerHTML += createTableRow(category);
  });
} else {
  listCategory().then((categories) => {
    localStorage.setItem("categories", JSON.stringify(categories));
    categories.forEach((category) => {
      table.innerHTML += createTableRow(category);
    });
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newCategory = new Category(name.value);
  saveCategory(newCategory);
  table.innerHTML += createTableRow(newCategory)
  name.value = "";
});
