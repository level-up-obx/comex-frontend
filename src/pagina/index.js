import { buscaProdutos } from "../api.js";

const cards = document.querySelector('.cards .row')

const produtos = await buscaProdutos();
produtos.forEach((e) => {
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