import { createProduct } from "../modelo.js";
import { saveProduct, productList } from "../api.js";

const productName = document.querySelector("#product-name");
const productPrice = document.querySelector("#product-price");
const productStock = document.querySelector("#product-stock");
const productDescription = document.querySelector("#product-description");
const productCategory = document.querySelector("#product-category");
const productPhoto = document.querySelector("#product-url");
const form = document.querySelector("#product-form");

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
    productPrice.value,
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
