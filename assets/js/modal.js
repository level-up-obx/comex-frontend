const modal = document.querySelector('.modal')
const abreModal = document.querySelector('.abre-modal')
const fechaModal = document.querySelector('.fecha-modal')
const infoTecnica = document.querySelector('.info-tecnica')
const espTecnica = document.querySelector('.esp-tecnica')
const t1 = document.querySelectorAll('.t1')
const t2 = document.querySelectorAll('.t2')


abreModal.addEventListener('click', () => {
        modal.classList.add('container-modal')
        modal.classList.remove('container-modal-desabilitado')
    })
    
fechaModal.addEventListener('click', (e) => {
    modal.classList.add('container-modal-desabilitado')
    modal.classList.remove('container-modal')
    
})

document.addEventListener('keydown', (e) => {
  if(e.key === 'Escape'){
    modal.classList.add('container-modal-desabilitado')
    modal.classList.remove('container-modal')
  }  
})

infoTecnica.addEventListener('click', () => {
    t1.forEach(item => item.classList.add('conteudo-modal-desabilitado'))
    t2.forEach(item => item.classList.remove('conteudo-modal-desabilitado'))
})

console.log(espTecnica);
espTecnica.addEventListener('click', () => {
    t1.forEach(item => item.classList.remove('conteudo-modal-desabilitado'))
    t2.forEach(item => item.classList.add('conteudo-modal-desabilitado'))
})