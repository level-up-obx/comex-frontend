import { Product } from './../../ts/model';
import { saveProduct, listCategory } from '../../ts/api.js'

const name: HTMLInputElement = <HTMLInputElement>document.getElementById("product__name")
const price: HTMLInputElement = <HTMLInputElement>document.getElementById("product__price")
const quantity: HTMLInputElement = <HTMLInputElement>document.getElementById("product__stock")
const description: HTMLInputElement = <HTMLInputElement>document.getElementById("product__description")
const inputProductPhoto: HTMLInputElement = <HTMLInputElement>document.getElementById("product__url")
const category: HTMLOptionElement = <HTMLOptionElement>document.getElementById("product__category")
const form: HTMLFormElement = <HTMLFormElement>document.getElementById("product__form")

// Listagem das categorias como opção
listCategory().then(categories => {
    categories.forEach((_category) => {
        category.innerHTML += `<option value="${category.id}">${_category.name}</option>`
    })
})

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const newProduct = new Product(
        name.value,
        description.value,
        parseFloat(price.value),
        parseInt(quantity.value),
        category.value,
        inputProductPhoto.value
    )
    saveProduct(newProduct);
    clearInputs();
})

function clearInputs() {
    name.value = ''
    description.value = ''
    price.value = ''
    quantity.value = ''
    inputProductPhoto.value = ''
    name.focus()
}