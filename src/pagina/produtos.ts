// import { criaProduto } from "../modelo.js";
import { Produto } from '../models/produto.js'

const produtoBtn = document.querySelector('.produto__btn') as HTMLButtonElement
const categoria = document.querySelector('#categoria') as HTMLInputElement

window.onload = () => {
  fetch('http://localhost:3000/categorias')
    .then(r => r.json())
    .then(categorys => categorys.forEach((c: object) => addCategoryOption(c)))
}

function addCategoryOption(c: any) {
  const selectOption = document.createElement('option')
  selectOption.classList.add('produto__select')
  selectOption.value = c.categoria
  selectOption.textContent = c.categoria

  categoria.appendChild(selectOption)
  categoria.value = ''
}

produtoBtn.onclick = () => {
  let nome = document.querySelector('#nome') as HTMLInputElement
  let preco = document.querySelector('#preco') as HTMLInputElement
  let estoque = document.querySelector('#estoque') as HTMLInputElement
  let descricao = document.querySelector('#descricao') as HTMLInputElement
  let categoria = document.querySelector('#categoria') as HTMLInputElement
  
  console.log(new Produto(nome.value, descricao.value, +preco.value, +estoque.value, categoria.value).criaProduto())
  fetch('http://localhost:3000/produtos', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(new Produto(nome.value, descricao.value, +preco.value, +estoque.value, categoria.value).criaProduto())
  })
    .then(resp => {
      if (resp.status === 201) {
        alert(`Produto ${nome.value} cadastrado com sucesso.`)
        nome.value = descricao.value = preco.value = estoque.value = categoria.value = ''
        nome.focus()
      }
    })
    .catch(err => {
      alert('Não foi possível salvar o produto! Aguarde uns minutos e tente novamente')
      console.log('fetchErr::', err)
    })
}