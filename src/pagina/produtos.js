import { criaProduto } from "../modelo.js";

const produtoBtn = document.querySelector('.produto__btn')
let categoria = document.querySelector('#categoria')

window.onload = () => {
  fetch('http://localhost:3000/categorias')
    .then(r => r.json())
    .then(categorys => categorys.forEach(c => addCategoryOption(c)))
}

function addCategoryOption(c) {
  const selectOption = document.createElement('option')
  selectOption.classList.add('produto__select')
  selectOption.value = c.categoria
  selectOption.textContent = c.categoria

  categoria.appendChild(selectOption)
  categoria.value = ''
}

produtoBtn.onclick = () => {
  let nome = document.querySelector('#nome')
  let preco = document.querySelector('#preco')
  let estoque = document.querySelector('#estoque')
  let descricao = document.querySelector('#descricao')
  let categoria = document.querySelector('#categoria')
  
  console.log(criaProduto(nome.value, descricao.value, preco.value, estoque.value, categoria.value))
  fetch('http://localhost:3000/produtos', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(criaProduto(nome.value, descricao.value, preco.value, estoque.value, categoria.value))
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