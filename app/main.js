const URL_API = 'http://localhost:3000'
const productSection = document.querySelector(".product_section")



function addProduct(product, index) {
    let classPanel = 'highlights_panel'

    if (index > 3) {
        classPanel = classPanel + ' disable_mobile'
    }

    let htmlCard = `<figure class="${classPanel}">
                <div class="product_img">
                <a href="product.html"><img src="${product.img}" alt="Controle" class="panel_img"></a>
                </div>
                <div class="product_content">
                <figcaption class="figcaption">${product.name}</figcaption>
                <figcaption><i class="fa-solid fa-dollar-sign"></i>${product.price}</figcaption>
                <a href="product.html" class="btn btn-lg button_panel">Comprar</a>
                </div>
            </figure>`

            return htmlCard
}

function listProduct() {
    fetch(`${URL_API}/produtos`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
        }
    })
        .then(response => response.json())
        .then(products => {
            let index = 0
            let addCards = products.map(product => {
                index++
                if (index > 8) {
                    return ''
                }
                return addProduct(product, index)
            }).join('')
            productSection.innerHTML = addCards;
        })
        .catch(error => {
            console.log(error)
            alert('Não foi possível recuperar os produtos.')
        })

}

listProduct()