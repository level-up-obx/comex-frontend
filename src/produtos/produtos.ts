import { Produto } from "../typescript/modelo.js"
import { apiPost } from "../typescript/api.js"

const formulario: HTMLFormElement = document.querySelector('#formulario')
const nome: HTMLInputElement = document.querySelector('#nome')
const preco: HTMLInputElement = document.querySelector('#preco')
const quantidadeEstoque: HTMLInputElement = document.querySelector('#qEstoque')
const descricao: HTMLInputElement = document.querySelector('#descricao')
const categoria: HTMLInputElement = document.querySelector('#categoria')
const url: HTMLInputElement = document.querySelector('#url')

function limpaCampos() {
    nome.value = descricao.value = preco.value = url.value = quantidadeEstoque.value = categoria.value = ''
}

formulario.addEventListener('submit', e => {
    e.preventDefault()
    apiPost('produtos', new Produto(nome.value, descricao.value, preco.value, url.value, quantidadeEstoque.value, categoria.value))
    limpaCampos()
    nome.focus()
})