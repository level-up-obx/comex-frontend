import{b as s}from"./api-d99e4e66.js";const o=document.querySelector(".cards .row");async function r(){(await s()).forEach(a=>{o.innerHTML+=`<div class="col col-md-3 cardItens">
                <div class="card mx-1 my-4">
                    <img src="${a.url}" class="card-img-top" alt="placa-mae">
                    <div class="card-body text-center">
                        <h5 class="card-title"><strong>${a.nome}</strong></h5>
                        <p class="card-text"><strong><span class="cifrao">$</span>${a.preco}</strong></p>
                        <a href="/produto.html" class="btn botao">Comprar</a>
                    </div>
                </div>
            </div>`})}window.addEventListener("load",r);
