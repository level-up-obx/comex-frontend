import { createProduct } from "../modelo.js"

const productName = document.querySelector("#productName")
const productPrice = document.querySelector("#productPrice")
const productStock = document.querySelector("#productStock")
const productDescription = document.querySelector("#productDescription")
const productCategory = document.querySelector("#productCategory")
const button = document.querySelector("#button")
const form = document.querySelector("#productForm")
let inc = 0;

const saveProduct = (event) => {
    event.preventDefault();
    let product = createProduct(productName.value, productDescription.value, productPrice.value, productStock.value, inc)
    console.log(product)
    inc++;
}

form.onsubmit = saveProduct;
// button.onclick = onProductSave; // Por conta do atributo type="submit" no html não precisa do evento de clique

// button.addEventListener("click", () => {
//     let product = model.createProduct(productName.value, productDescription.value, productPrice.value, productStock.value, inc)
//     console.log(product)
//     inc++;
// })