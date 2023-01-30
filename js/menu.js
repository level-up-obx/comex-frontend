const btnMenu = document.querySelector('#botao-menu')
const listaMenu = document.querySelector('.menu__lista')

btnMenu.addEventListener('click', () => switchMenu())


function switchMenu(){
    if(listaMenu.classList.contains('menu__lista-disable')){
        listaMenu.classList.remove('menu__lista-disable')
        listaMenu.classList.add('menu__lista-active')
    } else {
        listaMenu.classList.remove('menu__lista-active')
        listaMenu.classList.add('menu__lista-disable')
    }
}