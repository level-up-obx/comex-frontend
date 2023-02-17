import { criaCategoria } from "../modelo.js";

const nome = document.querySelector('#form-nome')
const enviar = document.querySelector('#enviar');

function salvar() {
    let imprimeCategoria = criaCategoria(nome.value);
    console.log(imprimeCategoria);
    nome.value = '';
    nome.focus();
}

enviar.addEventListener('click', (e) => {
    e.preventDefault();
    salvar();
})







