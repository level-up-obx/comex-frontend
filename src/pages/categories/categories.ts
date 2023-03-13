import { Category } from "./../../ts/model";
import * as api  from "../../ts/api.js";

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

function createTableRow(category: Category) {
  let showActive: string = category.status == "Ativa" ? "" : "d-none";
  let showDesactive: string = category.status == "Inativa" ? "" : "d-none";

  const row = document.createElement("tr");
  row.innerHTML = `
        <td scope="row" class="table-dark">${category.name}</td>
        <td class="table-dark">${category.status}</td>
        <td class="table-dark">${category.createdAt}</td>
        <td class="table-dark">
          <button class="btn btn-outline-info btn-xs px-2 py-1">
          <i class='bx bx-pencil bx-xs'></i>
          </button>
          <button class="btn btn-outline-success btn-xs px-2 py-1 ${showActive}" >
          <i class='bx bx-lock-open-alt bx-xs'></i>
          </button>
          <button class="btn btn-outline-warning btn-xs px-2 py-1 ${showDesactive}" >
          <i class='bx bx-lock-alt bx-xs'></i>
          </button>
          <button class="btn btn-outline-danger btn-xs px-2 py-1 delete" >
          <i class='bx bxs-trash bx-xs'></i>
          </button>
        </td>
`;
  row.querySelector(".delete")!.addEventListener("click", () => {
    deleteCategory(category.id)
  })
  return row;
}


if (getLocalStorage) {
  getLocalStorage.forEach((category) => {
    table.appendChild(createTableRow(category));
  });
} else {
  api.listCategory().then((categories) => {
    localStorage.setItem("categories", JSON.stringify(categories));
    categories.forEach((category) => {
      table.appendChild(createTableRow(category));
    });
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newCategory = new Category(name.value);
  api.saveCategory(newCategory);
  table.appendChild(createTableRow(newCategory));
  name.value = "";
});

function deleteCategory(id: number): void {
  const confirmation = window.confirm("Tem certeza que deseja deletar essa categoria?")
  if(confirmation) {
    console.log(`Categoria ${id} excluída com sucesso`)
    api.deleteCategory(id)
    alert("Categoria deletada com sucesso!")
    location.reload()
  }
}