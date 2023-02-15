import { criaProduto } from '../modelo.js'

let formProdutos = document.querySelector('#formProdutos')

formProdutos.addEventListener('submit', (event) => {
    event.preventDefault()

    let novaProduto = criaProduto(
        event.target.elements['nome'].value,
        event.target.elements['descricao'].value,
        parseInt(event.target.elements['preco'].value) || null,
        parseInt(event.target.elements['quantidade'].value) || null,
        parseInt(event.target.elements['categoria'].value) || null
    )


    console.log(novaProduto)
})
