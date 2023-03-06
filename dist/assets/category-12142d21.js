import"./moment-9c7c83e1.js";/* empty css              */document.getElementById("input_category");const o="http://localhost:3000",r=document.querySelector("#table_category tbody");function s(t){return`<tr>
                <th scope="row">${t.name}</th>
                <td>${t.status}</td>
                <td>${t.createdAt}</td>
                <td><i class="fa-solid fa-trash" title="Excluir"></i>
                <i class="fa-solid fa-pen-to-square" title="Alterar"></i>
                <i class="fa-solid fa-xmark" title="Desativar"></i></td>
                
            </tr>`}function i(){fetch(`${o}/categorias`,{method:"GET",headers:{"Content-Type":"application/json"}}).then(t=>t.json()).then(t=>{let e=t.map(a=>s(a)).join("");r.innerHTML=e}).catch(t=>{console.log(t),alert("Não foi possível recuperar as categorias.")})}i();
