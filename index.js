const menu = document.querySelector('#menu-icon')
const nav = document.querySelector('#nav')

let menuController = false

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

const setProduct = (e) => {  
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
