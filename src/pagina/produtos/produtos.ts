import IMask from 'imask';
import { Produto } from '../../ts/modelo-classes.js';
import { buscaCategorias, salvaProdutos } from '../../ts/api.js';

const nome: HTMLInputElement = <HTMLInputElement>document.querySelector('#nome');
const estoque: HTMLInputElement = <HTMLInputElement>document.querySelector('#estoque');
const descricao: HTMLInputElement = <HTMLInputElement>document.querySelector('#descricao');
const categoria: HTMLInputElement = <HTMLInputElement>document.querySelector('#categoria');
const urlImg: HTMLInputElement = <HTMLInputElement>document.querySelector('#url');

const campoPreco: HTMLInputElement = <HTMLInputElement>document.querySelector('#preco');
const preco = IMask(campoPreco, {
    mask: Number,
    scale: 2,
    thousandsSeparator: '.',
    radix: ',',
    signed: false,
    padFractionalZeros: true
});

const formulario: HTMLElement = <HTMLElement>document.getElementById('formulario-produtos');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const produto = new Produto(
        nome.value,
        descricao.value,
        parseInt(preco.value),
        parseInt(estoque.value),
        urlImg.value,
        categoria.value
    );

    salvaProdutos(produto);
    reseta();
    nome.focus();
})

function reseta(): void {
    nome.value = '';
    descricao.value = '';
    preco.value = '';
    estoque.value = '';
    urlImg.value = '';
    categoria.value = 'Selecione...';
    nome.focus();
}

// ============================= Atualiza as categorias dos produtos =============================
let campoCategoria = document.querySelector('#categoria');

const categorias = buscaCategorias();
categorias.then(c => {
    c.map((e: any) => {
        if (e.status === 'ATIVA') {
            campoCategoria.innerHTML += `<option value="${e.id}">${e.nome}</option>`;
        }
    })
});