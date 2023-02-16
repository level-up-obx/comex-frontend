import {criaProduto} from '../modelo.js'

const formulario = document.querySelector('#formulario')
const nome = document.querySelector('#nome')
const preco = document.querySelector('#preco')
const qtdEstoque = document.querySelector('#qEstoque')
const descricao = document.querySelector('#descricao')
const categoria = document.querySelector('#categoria')
const botao = document.querySelector('#botao')

function evento(e){
    if(nome.value !== '' && preco.value >= 0 && qtdEstoque.value >= 0 && descricao !== '' && categoria.value !== ''){
        e.preventDefault()
        console.log(criaProduto(nome.value, descricao.value, preco.value, qtdEstoque.value, categoria.value))
        nome.value = ''
        preco.value = ''
        qtdEstoque.value = ''
        descricao.value = ''
        categoria.value = ''
        nome.focus()
    } else alert('Preencha todos os campos corretamente!')

}

formulario.addEventListener('submit', evento)
botao.addEventListener('click', evento)
