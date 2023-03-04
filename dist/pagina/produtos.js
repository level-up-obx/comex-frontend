"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const modelo_js_1 = require("../modelo.js");
let formProdutos = document.querySelector('#formProdutos');
formProdutos.addEventListener('submit', (event) => {
    event.preventDefault();
    let nome = event.target.elements.namedItem('nome');
    let url = event.target.elements.namedItem('url');
    let descricao = event.target.elements.namedItem('descricao');
    let precoString = event.target.elements.namedItem('preco');
    let quantidadeString = event.target.elements.namedItem('quantidade');
    let categoria = event.target.elements.namedItem('categoria');
    let preco = parseInt(precoString.value);
    let quantidade = parseInt(quantidadeString.value);
    let novoProduto = new modelo_js_1.Produto(nome.value, url.value, descricao.value, preco, quantidade, categoria.value);
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
    nome.value = '';
    url.value = '';
    descricao.value = '';
    precoString.value = '';
    quantidadeString.value = '';
    categoria.value = '';
    nome.focus();
    // console.log(novoProduto)
});
//# sourceMappingURL=produtos.js.map