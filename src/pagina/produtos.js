import { criaProduto } from "../modelo.js";

const produtoBtn = document.querySelector('.produto__btn')
let categoria = document.querySelector('#categoria')
categoria.value = ''


produtoBtn.onclick = () => {
  let nome = document.querySelector('#nome')
  let preco = document.querySelector('#preco')
  let estoque = document.querySelector('#estoque')
  let descricao = document.querySelector('#descricao')
  let categoria = document.querySelector('#categoria')
  
  console.log(criaProduto(nome.value, descricao.value, preco.value, estoque.value, categoria.value))
  
  nome.value = descricao.value = preco.value = estoque.value = categoria.value = ''

  nome.focus()
}