import { buscaCategorias, salvaCategoria, excluiCategoria, atualizaCategoria, alteraStatusCategoria } from "../../ts/api.js";
import { Categoria } from "../../ts/modelo-classes.js";

const nome: HTMLInputElement = <HTMLInputElement>document.querySelector('#form-nome');
const enviar: HTMLElement = <HTMLElement>document.querySelector('#formulario-categoria');
const tabela: HTMLElement = <HTMLElement>document.querySelector('#table');
const editar: HTMLButtonElement = document.querySelector('#editar');

// ============================= Envia as informações para API fake =============================
enviar.addEventListener('submit', (e) => {
    e.preventDefault();

    const categoria = new Categoria(nome.value);
    salvaCategoria(categoria).then(() => montaListaCategorias());

    nome.value = '';
    nome.focus();
})

// ============================= Edita categoria =============================
function editaCategoria(categoria: any): void {
    let novoNome = prompt('Digite o nome da nova categoria:');

    if (novoNome && novoNome.trim().length > 2) {
        categoria.nome = novoNome;
        atualizaCategoria(categoria)
            .then(() => montaListaCategorias())
            .catch(alert)
    }
}

// ============================= Desativa categoria =============================
function desativaCategoria(categoria: any): void {
    let confirmou = confirm('Tem certeza que deseja desativar está categoria?');

    if (confirmou) {
        alteraStatusCategoria(categoria.id, 'INATIVA')
            .then(() => montaListaCategorias())
            .catch(alert)
    }
}

function ativaCategoria(categoria: any): void {
    alteraStatusCategoria(categoria.id, 'ATIVA')
        .then(() => montaListaCategorias())
        .catch(alert)
}

// ============================= Completa o HTML com as informações =============================
export function preencheHTML(categoria: Categoria): any {
    let linha = document.createElement('tr');

    linha.innerHTML = `<th scope="row">
        ${categoria.nome}
    </th>
        <td>
            ${categoria.status}
        </td>
        <td>
            ${categoria.criacao}
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
        </td>`;

    linha.querySelector('#excluir').addEventListener('click', e => {
        excluiCategoria(categoria.id).then(() => montaListaCategorias()
        );
    });
    linha.querySelector('#editar').addEventListener('click', e => {
        editaCategoria(categoria);
    });
    linha.querySelector('#desativar').addEventListener('click', e => {
        desativaCategoria(categoria);
    });
    linha.querySelector('#ativar').addEventListener('click', e => {
        ativaCategoria(categoria);
    });

    return linha;
}

// ============================= LocalStorage =============================
function montaListaCategorias(): void {
    tabela.innerHTML = '';
    let categorias: Array<Categoria> = JSON.parse(localStorage.getItem('categorias')!);
    if (categorias != null) {
        categorias.forEach((e: any): any => {
            tabela!.appendChild(preencheHTML(e));
        })
    } else {
        const categoria = buscaCategorias();
        categoria.then((e: Categoria[]) => {
            localStorage.setItem('categorias', JSON.stringify(e));
            e.forEach((e) => {
                tabela!.appendChild(preencheHTML(e));
            });
        })
    }
}

// ============================= Carregar a pagina com as informações =============================
window.addEventListener('load', montaListaCategorias);