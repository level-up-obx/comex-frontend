import { criaCategoria } from '../modelo.js'
const botaoCategoria = document.querySelector('#botao-categoria')
const input = document.querySelector('#input-categoria')

function eventoInput(e){
    e.preventDefault()
    if(input.value.length > 0 && input.value === 'informática' || input.value === 'móveis' || input.value === 'livros') console.log(criaCategoria(input.value))
    else console.log('Digite um valor válido')
    input.value = ''
    input.focus()
    
}

botaoCategoria.addEventListener('click', eventoInput)
input.addEventListener('submit', eventoInput)