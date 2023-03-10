import { buscaProdutosApi } from './ts/api.js';

const cards: HTMLElement = document.querySelector('.cards .row');

async function carregaProdutos() {
    const produtos: any = await buscaProdutosApi();
    produtos.forEach((e: any) => {
        cards.innerHTML +=
            `<div class="col col-md-3 cardItens">
                <div class="card mx-1 my-4">
                    <img src="${e.url}" class="card-img-top" alt="placa-mae">
                    <div class="card-body text-center">
                        <h5 class="card-title"><strong>${e.nome}</strong></h5>
                        <p class="card-text"><strong><span class="cifrao">$</span>${e.preco}</strong></p>
                        <a href="/produto.html" class="btn botao">Comprar</a>
                    </div>
                </div>
            </div>`
    });
}

window.addEventListener('load', carregaProdutos);