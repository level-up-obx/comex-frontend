import { Product } from "../../modelo.js"


const form = document.getElementById("form_product") as HTMLFormElement;
const URL_API = 'http://localhost:3000';
const productSection = document.querySelector(".product_section") as HTMLElement;



form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const product = new Product(form.product_name.value, form.product_description.value,
        form.product_price.value, form.product_qtd.value, form.product_category.value);

    postProduct(product);

    const elements = form.getElementsByTagName("input");

    for (let index = 0; index < elements.length; index++) {
        const element = elements[index];
        element.value = "";

    }

    form.product_description.value = "";
    form.product_category.value = "";

})

function postProduct(product: Product): void {
    let productData = {
        uuid: product.uuid,
        name: product.name,
        description: product.description,
        price: product.price,
        qtd: product.qtd,
        category: product.category,
        img: product.img,
        createdAt: product.createdAt,
    };
    fetch(`${URL_API}/produtos`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
    })
        .then(response => {
            alert(`Produto ${productData.name} cadastrado com sucesso.`);
            form.product_name.value = "";
            form.product_name.focus();
        })
        .catch(error => {
            alert('Não foi possível salvar o produto! Aguarde uns minutos e tente novamente.');
        })
}





