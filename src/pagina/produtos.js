import { criaProduto } from "../modelo.js";

const nome = document.querySelector('#nome');
const preco = document.querySelector('#preco');
const estoque = document.querySelector('#estoque');
const descricao = document.querySelector('#descricao');
const categoria = document.querySelector('#categoria');

const enviar = document.querySelector('#enviar');

function salvar() {
    let imprimeProduto = criaProduto(nome.value, descricao.value, preco.value, estoque.value, categoria.value);
    console.log(imprimeProduto);
    nome.value = '';
    descricao.value = '';
    preco.value = '';
    estoque.value = '';
    categoria.value = 'Selecione...';
    nome.focus();
}

enviar.addEventListener('click', (e) => {
    e.preventDefault();
    salvar();
})




