import { Categoria } from '../typescript/modelo.js'
import { apiPost } from '../typescript/api.js'

const form: HTMLFormElement | null = document.querySelector('#form-categoria')
const nome: HTMLInputElement | null = document.querySelector('#input-categoria')
const corpoTabela: Element | null = document.querySelector('#corpo-tabela')

function criaHTML(data: Categoria) {
    return `
    <tr>
        <td>${data._nome}</td>
        <td>
            <td class="celula-botoes"><button id="deleta" onclick="deletaItem()"><i class="fa-solid fa-trash"></i></button> <button id="edita"><i class="fa-regular fa-pen-to-square"></i></button> <button id="bloqueia"><i class="fa-solid fa-ban"></i></button></td>
        </td>
    </tr>`
}



/* fetch('http://localhost:3000/categorias')
    .then(resp => resp.json())
    .then(data => {
        console.log(data)    
        data.forEach((elemento: Categoria) => corpoTabela.innerHTML += criaHTML(elemento))
        data.forEach(element => {
            console.log(element._id)
        });
    })
    .catch(e => alert('Não foi possível recuperar as categorias'))
 */
form.addEventListener('submit', (e) => {
    e.preventDefault()
    apiPost('categorias', new Categoria(nome.value))
    nome.value = ''
    nome.focus()

})
