import { createProduct } from "../modelo.js"

const productName = document.querySelector("#product-name")
const productPrice = document.querySelector("#product-price")
const productStock = document.querySelector("#product-stock")
const productDescription = document.querySelector("#product-description")
const productCategory = document.querySelector("#product-category")
const button = document.querySelector("#category-button")
const form = document.querySelector("#product-form")

const saveProduct = (event) => {
    event.preventDefault();
    let product = createProduct(productName.value, productDescription.value, productPrice.value, productStock.value, productCategory.value);
    console.log(product);
    productName.value = "";
    productPrice.value = "";
    productStock.value = "";
    productDescription.value = "";
    productCategory.value = "";
}

form.addEventListener("submit", (event) => {
    saveProduct(event);
})
button.addEventListener("click", (event) => {
    saveProduct(event)
})