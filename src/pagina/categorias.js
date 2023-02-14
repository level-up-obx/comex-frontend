import { criaCategoria } from "../modelo.js";

const categoryBtn = document.querySelector('.categoria__btn')
let input = document.querySelector('.categoria__input')

const handleCategoryAdd = () => {
  console.log(criaCategoria(input.value))
  input.value = ''
  input.focus()
}

categoryBtn.onclick = () => {
  handleCategoryAdd()
}

input.onkeydown = e => e.code === 'Enter' ? handleCategoryAdd() : null
