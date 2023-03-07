import { Category} from "../../modelo.js"

const input_category = document.getElementById("input_category") as HTMLInputElement;
const URL_API = 'http://localhost:3000';
const tableCategory = document.querySelector('#table_category tbody') as HTMLElement;
const btnSave = document.getElementById('btn_save') as HTMLButtonElement;

btnSave.onclick = save;

function save():void {
    const category = new Category(input_category.value);
    postCategory(category);
    console.log(category);
}

function postCategory(category: Category): void {
    fetch(`${URL_API}/categorias`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(category),
    })
        .then(response => {
            alert(`Categoria ${category.name} cadastrada com sucesso.`);
            input_category.value = "";
            input_category.focus();
            listCategory();
        })
        .catch(error => {
            alert('Não foi possível salvar a categoria! Aguarde uns minutos e tente novamente.');
        })
}

function addCategory(category: Category): String {
    return `<tr>
                <th scope="row">${category.name}</th>
                <td>${category.status}</td>
                <td>${category.createdAt}</td>
                <td><i class="fa-solid fa-trash" title="Excluir"></i>
                <i class="fa-solid fa-pen-to-square" title="Alterar"></i>
                <i class="fa-solid fa-xmark" title="Desativar"></i></td>
                
            </tr>`
}

function listCategory(): void {
    fetch(`${URL_API}/categorias`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
        }
    })
        .then(response => response.json())
        .then(categories => {
            let addList = categories.map((category: Category)=> {

                return addCategory(category);

            }).join('')
            tableCategory.innerHTML = addList;
        })
        .catch(error => {
            console.log(error)
            alert('Não foi possível recuperar as categorias.');
        })

}

listCategory();