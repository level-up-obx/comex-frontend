import { criaProduto } from '../modelo.js'
import { apiPost } from '../consumoApi.js'

const formulario = document.querySelector('#formulario')
const nome = document.querySelector('#nome')
const preco = document.querySelector('#preco')
const quantidadeEstoque = document.querySelector('#qEstoque')
const descricao = document.querySelector('#descricao')
const categoria = document.querySelector('#categoria')
const url = document.querySelector('#url')

function limpaCampos() {
    nome.value = descricao.value = preco.value = url.value = quantidadeEstoque.value = categoria.value = ''
}

formulario.addEventListener('submit', e => {
    e.preventDefault()
    apiPost('produtos', criaProduto(nome.value, descricao.value, preco.value, url.value, quantidadeEstoque.value, categoria.value))
    limpaCampos()
    nome.focus()
})