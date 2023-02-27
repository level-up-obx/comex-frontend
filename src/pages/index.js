import { productList } from "../api.js";
const cards = document.getElementById("cards");

const products = await productList();
products.forEach((product) => {
    console.log(product)
    cards.innerHTML += `
        <div class="card bg-dark text-bg-dark">
            <img
              src="${product.photo}"
              class="card-img-top"
              alt="${product.name}"
            />
            <div class="card-body bg-dark card-dark text-center">
              <h5 class="card-title">${product.name}</h5>
              <p class="card-text">${product.price}</p>
              <a href="#" class="btn btn-primary">Comprar</a>
            </div>
        </div>
    `;
});
