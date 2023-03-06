import { CriaCliente } from '../modelo.js';

function createContent(categorias) {
    let html = '';
    categorias.forEach(item => {
        html +=  /* html */ `
                <tr>
                    <td>${item.nome}</td>
                    <td>${item.status}</td>
                    <td>${item.criacao}</td>
                    <td>
                        <button class="btn border border-1" id="delete-btn-${item.id}">
                            <svg width="20px" height="20px" viewBox="0 0 24.00 24.00" fill="none" stroke="#ff0000" transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 12V17" stroke="#ff0000" stroke-width="1.8640000000000001" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14 12V17" stroke="#ff0000" stroke-width="1.8640000000000001" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M4 7H20" stroke="#ff0000" stroke-width="0.8640000000000001" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke="#ff0000" stroke-width="0.8640000000000001" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#ff0000" stroke-width="0.8640000000000001" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                        </button>
                    </td>
                </tr>`;
    });

    document.querySelector('tbody').innerHTML = html;
}

(async function listarCategorias() {
    try {
        let categorias;
        let categoriasNoCache = localStorage.getItem('cache-categorias')

        if (categoriasNoCache) {
            categorias = JSON.parse(categoriasNoCache)
            return createContent(categorias)
        }

        const response = await fetch('http://localhost:3000/categorias');
        const newCategorias = await response.json();
        localStorage.setItem('cache-categorias', JSON.stringify(newCategorias))

        createContent(newCategorias)

        const deletarItem = async (uuid) => {
            try {
                const response = await fetch(`http://localhost:3000/categorias/${uuid}`, { method: 'DELETE' });
                const data = await response.json();
                localStorage.removeItem('cache-categorias')
                return data
            } catch (error) {
              console.error('Erro ao excluir o item: ', error);
            }
          };

        document.querySelectorAll('button[id^="delete-btn-"]').forEach(btn => {
            const id = btn.id.substring(11,50)
            btn.addEventListener('click', () => {
                deletarItem(id)
                alert('item deletado com sucesso! atualize a página.')
            });
        });

    } catch (err) {
        let msg = 'Não foi possível recuperar as categorias.'
        document.querySelector('.erro-listar-categorias').innerHTML = msg;
    }

})()

const campoNome = document.querySelector("#nome")
const form = document.querySelector("#formCategoria")

function formattedDataCurrent() {
    const date = new Date();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const year = date.getFullYear();
    const formattedData = `${year}-${month}-${day}`;
    return formattedData // exemplo de saída: "2023-02-15"
}


form.addEventListener("submit", function (event) {
    event.preventDefault();

    let nome = campoNome.value
    let status = "ATIVO"
    let criacao = formattedDataCurrent()

    let novaCategoria = new CriaCliente(nome, status, criacao)

    fetch('http://localhost:3000/categorias', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(novaCategoria),
    })
    .then((response) => response.json())
    .then((data) => {
        alert(`Categoria ${data.nome} cadastrada com sucesso! Atualize a página.`)
        localStorage.removeItem('cache-categorias')
    })
    .catch((error) => {
        console.error('Não foi possível salvar a categoria! Aguarde uns minutos e tente novamente.');
    });

    campoNome.value = ''
    campoNome.focus()
});


