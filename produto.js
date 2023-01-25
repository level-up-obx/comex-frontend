const queryString = window.location.search
const params = new URLSearchParams(queryString)
const children = params.get('children')
const parsedChildren = JSON.parse(decodeURIComponent(children))
const content = document.querySelector('.product-page-container')

content.innerHTML = parsedChildren

const productText = document.querySelector('.products-text')

console.log('productText::', productText)

if (productText.innerText == 'Placa Mãe') {
  content.innerHTML += `<p class="product-description">Placa Mãe Gigabyte B550M AORUS ELITE (AM4/DDR4/HDMI/M.2(PCIe,NVMe,SATA3)/VRM Solution/USB3.2) - B550M AORUS ELITE</p>`
} else if (productText.innerText == 'Controle Super Nintendo') {
  content.innerHTML += `<p class="product-description">Controle Para Super Nintendo Super Nes Nfe</p>`
} else {
  content.innerHTML += `<p class="product-description">Kingstone KVR16N118 - Memória de 8GB DIMM DDR3 1600Mhz 1,5V 2Rx8 para desktop</p>`
}

