const produtosMaisVendidos = document.querySelector('.box-mais-vendidos-card')

function criaHtml(data) {
    return `
        <div class="mais-vendidos__card">
            <img src="${data.url}" alt="Texto alternativo da imagem" class="mais-vendidos__card-img">
            <div class="mais-vendidos__card-textos">
                <h3 class="nome-produto">${data.nome}</h3>
                <div class="box-valor-produto">
                    <span class="valor-produto-simbolo"></span>
                    <p class="valor-produto">${data.preco}</p>
                </div>
            </div>
            <button class="botao-produto">Comprar</button>
        </div>
    `
}

fetch('http://localhost:3000/produtos')
    .then(resp => resp.json())
    .then(data => {
        data.forEach(elemento => produtosMaisVendidos.innerHTML += criaHtml(elemento))
    })
    .catch(e => alert('Não foi possível recuperar os produtos.'))