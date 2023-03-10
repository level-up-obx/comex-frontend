import{s,a as d,e as u,c as b,d as c}from"./api-d99e4e66.js";import{C as m}from"./modelo-classes-80da3a7b.js";const n=document.querySelector("#form-nome"),f=document.querySelector("#formulario-categoria"),i=document.querySelector("#table");document.querySelector("#editar");f.addEventListener("submit",e=>{e.preventDefault();const t=new m(n.value);s(t).then(()=>o()),n.value="",n.focus()});function v(e){let t=prompt("Digite o nome da nova categoria:");t&&t.trim().length>2&&(e.nome=t,b(e).then(()=>o()).catch(alert))}function h(e){confirm("Tem certeza que deseja desativar está categoria?")&&c(e.id,"INATIVA").then(()=>o()).catch(alert)}function p(e){c(e.id,"ATIVA").then(()=>o()).catch(alert)}function r(e){let t=document.createElement("tr");return t.innerHTML=`<th scope="row">
        ${e.nome}
    </th>
        <td>
            ${e.status}
        </td>
        <td>
            ${e.criacao}
        </td>
        <td>
            <button type="button" class="btn" id="editar" aria-label="Close"><box-icon name='edit' type='solid' 
                color='#8FA8FF'></box-icon>
            </button>

            <button type="button" class="btn" id="excluir" aria-label="Close"><box-icon name='trash'
                color='#DC3545'></box-icon>
            </button>
            
            <button type="button" class="btn" id="desativar" aria-label="Close" ><box-icon name='pause-circle'
                color='#FFC107'></box-icon>
            </button>

            <button type="button" class="btn" id="ativar" aria-label="Close" ><box-icon name='play-circle'
                color='#28A745'></box-icon>
            </button>
        </td>`,t.querySelector("#excluir").addEventListener("click",a=>{u(e.id).then(()=>o())}),t.querySelector("#editar").addEventListener("click",a=>{v(e)}),t.querySelector("#desativar").addEventListener("click",a=>{h(e)}),t.querySelector("#ativar").addEventListener("click",a=>{p(e)}),t}function o(){i.innerHTML="";let e=JSON.parse(localStorage.getItem("categorias"));e!=null?e.forEach(t=>{i.appendChild(r(t))}):d().then(a=>{localStorage.setItem("categorias",JSON.stringify(a)),a.forEach(l=>{i.appendChild(r(l))})})}window.addEventListener("load",o);
