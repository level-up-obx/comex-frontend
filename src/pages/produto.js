import { createProduct } from "../modelo.js";
import { saveProduct, productList, categoryList } from "../api.js";

const productName = document.querySelector("#product-name");
const productPrice = document.querySelector("#product-price");
const productStock = document.querySelector("#product-stock");
const productDescription = document.querySelector("#product-description");
const productCategory = document.querySelector("#product-category");
const productPhoto = document.querySelector("#product-url");
const form = document.querySelector("#product-form");
const productOption = document.querySelector("#product-category")

const clearValues = () => {
  productName.value = "";
  productPrice.value = "";
  productStock.value = "";
  productDescription.value = "";
  productCategory.value = "";
};

const getProductName = (event) => {
  event.preventDefault();
  const product = createProduct(
    productName.value,
    productDescription.value,
    productPrice.formatToNumber(),
    productStock.value,
    productCategory.value,
    productPhoto.value
  );
  saveProduct(product);
  clearValues();
};

form.addEventListener("submit", (event) => {
  getProductName(event);
});


// Categoria do produto
const categories = await categoryList()
categories.forEach((category) => {
  productOption.innerHTML += `<option value="${category.id}">${category.name}</option>`
})