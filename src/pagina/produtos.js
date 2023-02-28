import IMask from '/node_modules/imask/esm/index.js';
import { criaProduto } from "../modelo.js";
import { salvaProdutos } from '../api.js';

const enviar = document.querySelector('#formulario-produtos');

const nome = document.querySelector('#nome');
const estoque = document.querySelector('#estoque');
const descricao = document.querySelector('#descricao');
const categoria = document.querySelector('#categoria');
const urlImg = document.querySelector('#url');
const preco = IMask(document.querySelector('#preco'), {
    mask: Number,
    scale: 2,
    thousandsSeparator: '.',
    radix: ',',
    signed: false,
    padFractionalZeros: true
});

// ============================= Função para criar e salvar produtos na API fake =============================
enviar.addEventListener('submit', (e) => {
    e.preventDefault();
    const produto = criaProduto(nome.value, descricao.value, preco.value, estoque.value, categoria.value, urlImg.value)
    salvaProdutos(produto)

    nome.value = '';
    descricao.value = '';
    preco.value = '';
    estoque.value = '';
    urlImg.value = '';
    categoria.value = 'Selecione...';
    nome.focus();
})