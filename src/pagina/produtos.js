import { criaProduto } from '../modelo.js'

let formProdutos = document.querySelector('#formProdutos')

formProdutos.addEventListener('submit', (event) => {
    event.preventDefault()

    let nome = event.target.elements['nome']
    let descricao = event.target.elements['descricao']
    let preco = event.target.elements['preco']
    let quantidade = event.target.elements['quantidade']
    let categoria = event.target.elements['categoria']

    let novaProduto = criaProduto(
        nome.value,
        descricao.value,
        parseInt(preco.value) || null,
        parseInt(quantidade.value) || null,
        parseInt(categoria.value) || null
    )

    nome.value = '',
    descricao.value = '',
    preco.value = '',
    quantidade.value = '',
    categoria.value = ''
    nome.focus()

    console.log(novaProduto)
})
