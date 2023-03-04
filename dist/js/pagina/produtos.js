"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var modelo_js_1 = require("../modelo.js");
var formProdutos = document.querySelector('#formProdutos');
formProdutos.addEventListener('submit', function (event) {
    event.preventDefault();
    var nome = event.target.elements.namedItem('nome');
    var url = event.target.elements.namedItem('url');
    var descricao = event.target.elements.namedItem('descricao');
    var precoString = event.target.elements.namedItem('preco');
    var quantidadeString = event.target.elements.namedItem('quantidade');
    var categoria = event.target.elements.namedItem('categoria');
    var preco = parseInt(precoString.value);
    var quantidade = parseInt(quantidadeString.value);
    var novoProduto = (0, modelo_js_1.criaProduto)(nome.value, url.value, descricao.value, preco, quantidade, categoria.value);
    fetch('http://localhost:3000/produtos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(novoProduto),
    })
        .then(function (response) { return response.json(); })
        .then(function (data) {
        console.log("Produto ".concat(data.nome, " cadastrada com sucesso."));
    })
        .catch(function (error) {
        console.error('Não foi possível salvar o produto! Aguarde uns minutos e tente novamente.');
    });
    nome.value = '';
    url.value = '';
    descricao.value = '';
    precoString.value = '';
    quantidadeString.value = '';
    categoria.value = '';
    nome.focus();
});
