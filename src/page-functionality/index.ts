const menu = document.querySelector('#menu-icon') as HTMLElement
const nav = document.querySelector('#nav') as HTMLElement

let menuController = false

window.onload = () => {
  fetch('http://localhost:3000/produtos')
    .then(r => r.json())
    .then(products => products.forEach((p: any) => {
      createCard(p)
    }))
}

function createCard(product: any) {
  document.querySelector('.products-container')!.innerHTML += `
  <article class="products">
    <img src=${product.imagem.url} alt=${product.imagem.alt} class="product__image">
    <p>
      <span class="products-text">${product.nome}</span><br>
      <span class="products-price">${(+product.preco).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
    </p>
    <button class="buy-btn">Comprar</button>
  </article>     
  `
}

const toggleMenu = () => {
  menuController = !menuController
  menuController ? nav.classList.add('show') : nav.classList.remove('show')
}

menu.addEventListener('click', () => {
  toggleMenu()
})

Array.from(document.querySelectorAll('#nav a')).map(a => {
  a.addEventListener('click', () => {
    toggleMenu()
  })
})

const setProduct = (e: any) => {  
  let currentElement = e.target
  let tagName = currentElement.localName
  
  if (e.target.children.length != 3) {
    while(tagName != 'article') {
      currentElement = currentElement.parentElement
      tagName = currentElement.localName    
    }    
    currentElement.click()
    
  } else  {

    const origin = window.location.origin    
    location.href = origin + '/produto.html' + '?children=' + 
    encodeURIComponent(JSON.stringify(currentElement.outerHTML))
  }
}

Array.from(document.querySelectorAll('.products')).map(p => {
  p.addEventListener('click', e => {
    setProduct(e)
  })
})
