import { CriaProduto } from '../modelo.js'

let formProdutos = document.querySelector('#formProdutos')

formProdutos.addEventListener('submit', (event) => {
    event.preventDefault()

    let nome = event.target.elements['nome']
    let url = event.target.elements['url']
    let descricao = event.target.elements['descricao']
    let preco = event.target.elements['preco']
    let quantidade = event.target.elements['quantidade']
    let categoria = event.target.elements['categoria']

    let novoProduto = new CriaProduto(
        nome.value,
        url.value,
        descricao.value,
        parseInt(preco.value) || null,
        parseInt(quantidade.value) || null,
        parseInt(categoria.value) || null
    )

    fetch('http://localhost:3000/produtos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(novoProduto),
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(`Produto ${data.nome} cadastrada com sucesso.`);
    })
    .catch((error) => {
        console.error('Não foi possível salvar o produto! Aguarde uns minutos e tente novamente.');
    });

    nome.value = '',
    url.value = '',
    descricao.value = '',
    preco.value = '',
    quantidade.value = '',
    categoria.value = ''
    nome.focus()

    // console.log(novoProduto)
})
