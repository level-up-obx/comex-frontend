import { Product } from "./modelo.js"

// interface FormElements {
//     day: HTMLInputElement;
//     month: HTMLInputElement;
//     year: HTMLInputElement;
// }


const form = document.getElementById("form_product") as HTMLFormElement;
const URL_API = 'http://localhost:3000';
const productSection = document.querySelector(".product_section") as HTMLElement;



form.addEventListener("submit", (evento) => {
    evento.preventDefault()

    // var formProduct: FormElements = <FormElements>(<any> form.elements); 

    const product = new Product(form.product_name.value, form.product_description.value,
        form.product_price.value, form.product_qtd.value, form.product_category.value)

    console.log(product)

    postProduct(product)

    const elements = form.getElementsByTagName("input")

    for (let index = 0; index < elements.length; index++) {
        const element = elements[index]
        element.value = ""

    }

})

function postProduct(product: Product): void {
    fetch(`${URL_API}/produtos`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
    })
        .then(response => {
            alert(`Produto ${product.name} cadastrado com sucesso.`)
            form.product_name.value = ""
            form.product_name.focus()
        })
        .catch(error => {
            alert('Não foi possível salvar o produto! Aguarde uns minutos e tente novamente.')
        })
}





