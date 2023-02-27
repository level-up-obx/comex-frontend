import { criaCategoria } from "../modelo.js";

const categoryBtn = document.querySelector('.categoria__btn')
const table = document.querySelector('.table tbody')
let input = document.querySelector('.categoria__input')

window.addEventListener('load', () => fetchCategorys())

function deleteCategory(id) {
  fetch(`http://localhost:3000/categorias/${id}`, {
    method: 'DELETE'
  })
  .then(() => adjustTable())
}

function adjustTable() {
  while(table.firstChild) {
    table.removeChild(table.firstChild)
  }
  fetchCategorys()
}

function fetchCategorys() {
  fetch('http://localhost:3000/categorias')
    .then(resp => resp.json())
    .then(data => data.forEach(category => addToTable(category)))
    .catch(err => {
      alert('Não foi possível recuperar as categorias.')
      console.log('fetchError::', err)
    })
}


function addToTable(data) {
  const row = document.createElement('tr')
  const idCell = document.createElement('td')
  const categoriaCell = document.createElement('td')
  const deleteButtonCell = document.createElement('td')
  const deleteButton = document.createElement('button')
  const alterButton = document.createElement('button')
  const deactivateButton = document.createElement('button')

  idCell.textContent = data.id
  categoriaCell.textContent = data.categoria
  deleteButton.textContent = 'Deletar'
  alterButton.textContent = 'Alterar'
  deactivateButton.textContent = 'Desativar'
  deleteButton.classList.add('btn', 'btn-danger', 'me-2')
  alterButton.classList.add('btn', 'btn-warning', 'me-2')
  deactivateButton.classList.add('btn', 'btn-secondary', 'me-2')
  deleteButton.addEventListener('click', () => deleteCategory(data.id))

  deleteButtonCell.appendChild(deleteButton)
  deleteButtonCell.appendChild(alterButton)
  deleteButtonCell.appendChild(deactivateButton)
  row.appendChild(idCell)
  row.appendChild(categoriaCell)
  row.appendChild(deleteButtonCell)
  table.appendChild(row)
}

const handleCategoryAdd = () => {
  fetch(`http://localhost:3000/categorias`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({categoria: input.value})
  })
    .then(resp => {
      if (resp.status === 201) {
        alert(`Categoria ${input.value} cadastrada com sucesso.`)
      }
    })
    .then(() => adjustTable())
    .catch(e => console.log('fetch error::', e))
  input.value = ''
  input.focus()
}

categoryBtn.onclick = () => {
  handleCategoryAdd()
}

input.onkeydown = e => e.code === 'Enter' ? handleCategoryAdd() : null