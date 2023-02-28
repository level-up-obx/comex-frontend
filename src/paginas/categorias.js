import { criaCategoria } from '../modelo.js'
import { apiPost } from '../consumoApi.js'

const form = document.querySelector('#form-categoria')
const nome = document.querySelector('#input-categoria')
const corpoTabela = document.querySelector('#corpo-tabela')

function criaHTML(data) {
    return `
    <tr>
        <td>${data.nome}</td>
        <td>
            <td class="celula-botoes"><button id="deleta"><i class="fa-solid fa-trash"></i></button> <button id="edita"><i class="fa-regular fa-pen-to-square"></i></button> <button id="bloqueia"><i class="fa-solid fa-ban"></i></button></td>
        </td>
    </tr>`
}

fetch('http://localhost:3000/categorias')
    .then(resp => resp.json())
    .then(data => {
        console.log(data)    
        data.forEach(elemento => corpoTabela.innerHTML += criaHTML(elemento))
    })
    .catch(e => alert('Não foi possível recuperar as categorias'))

form.addEventListener('submit', (e) => {
    e.preventDefault()
    if(nome.value === 'Informática' || nome.value === 'Móveis' || nome.value === 'Livros')
        apiPost(`categorias`, criaCategoria(nome.value))
    else alert('Valor inválido')
    nome.value = ''
    nome.focus()

})
