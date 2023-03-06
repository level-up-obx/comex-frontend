import { Product } from './model';
import { listProduct } from "./api.js";
const cards: HTMLElement = <HTMLElement>document.getElementById("cards");

const formatter = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })

listProduct().then((product) => {
    product.forEach((product) => {
        cards.innerHTML += createCard(product)
    })
})

function createCard(product: Product): string {
    return `
        <div class="card bg-dark text-bg-dark">
            <img
                src="${product.photo}"
                class="card-img-top"
                alt="${product.name}"
            />
            <div class="card-body bg-dark card-dark text-center">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">${formatter.format(product.price)}</p>
            <a href="#" class="btn btn-primary">Comprar</a>
            </div>
        </div>
    `;
}