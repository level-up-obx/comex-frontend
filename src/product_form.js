import {createProduct} from "./modelo.js"

const form = document.getElementById("form_product")

form.addEventListener("submit", (evento) => {
    evento.preventDefault()
    const product_name_input = document.getElementById("product_name")
    const product_name = product_name_input.value

    const product_description_input = document.getElementById("product_description")
    const product_description = product_description_input.value

    const product_price_input = document.getElementById("product_price")
    const product_price = product_price_input.value


    const product_qtd_input = document.getElementById("product_qtd")
    const product_qtd = product_qtd_input.value

    const product_category_input = document.getElementById("product_category")
    const product_category = product_category_input.value

    const product = createProduct(product_name, product_description, product_price, product_qtd, product_category)
    console.log(product)

    product_name_input.value = ""
    product_name_input.focus()

    product_description_input.value = ""

    product_price_input.value = ""

    product_qtd_input.value = ""

    product_category_input.value = ""
})




