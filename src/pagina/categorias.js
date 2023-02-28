import { salvaCategoria } from "../api.js";
import { buscaCategorias } from "../api.js";
import { criaCategoria } from "../modelo.js";

const nome = document.querySelector('#form-nome')
const enviar = document.querySelector('#formulario-categoria')
const tabela = document.querySelector('#table')

// ============================= Enviamos as informações para API fake =============================
enviar.addEventListener('submit', (e) => {
    e.preventDefault()

    const categoria = criaCategoria(nome.value)
    salvaCategoria(categoria)

    nome.focus()
    nome.value = ''
})

// ============================= Completar o HTML com as informações =============================
function preencheHTML(categoria) {
    tabela.innerHTML +=
        `<tr>
            <th scope="row">${categoria.nome}</th>
            <td>${categoria.status}</td>
            <td>${categoria.criacao}</td>
            <td>
                <button type="button" class="btn me-2" aria-label="Close"><box-icon name='trash'
                color='#bd0303'></box-icon></button>
                <button type="button" class="btn me-2" aria-label="Close"><box-icon name='edit' type='solid'
                color='#8FA8FF'></box-icon></button>
                <button type="button" class="btn me-2" aria-label="Close"><box-icon name='stop-circle'
                color='#bd0303'></box-icon></button>
            </td>
        </tr>`;
}

// ============================= LocalStorage =============================
let categorias = JSON.parse(localStorage.getItem('categorias'))
if (categorias != null) {
    categorias.forEach((e) => {
        preencheHTML(e)
    })
} else {
    const categoria = await buscaCategorias()
    localStorage.setItem('categorias', JSON.stringify(categoria))

    categoria.forEach((e) => {
        preencheHTML(e)
    })
}