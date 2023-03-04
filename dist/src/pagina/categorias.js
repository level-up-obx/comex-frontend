import { CriaCategoria } from '../modelo.js';
class Categoria {
    id;
    nome;
    status;
    criacao;
    campoNome;
    form;
    constructor(id, nome, status, criacao) {
        this.id = id;
        this.nome = nome;
        this.status = status;
        this.criacao = criacao;
        this.campoNome = document.querySelector('#nome');
        this.form = document.querySelector('#formCategoria');
        this.form.addEventListener('submit', this.onSubmit.bind(this));
    }
    static createContent(categorias) {
        let html = '';
        categorias.forEach(item => {
            html += `
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
    async listarCategorias() {
        try {
            let categorias;
            let categoriasNoCache = localStorage.getItem('cache-categorias');
            if (categoriasNoCache) {
                categorias = JSON.parse(categoriasNoCache);
                return Categoria.createContent(categorias);
            }
            const response = await fetch('http://localhost:4000/categorias');
            const newCategorias = await response.json();
            localStorage.setItem('cache-categorias', JSON.stringify(newCategorias));
            Categoria.createContent(newCategorias);
            const deletarItem = async (uuid) => {
                try {
                    const response = await fetch(`http://localhost:4000/categorias/${uuid}`, { method: 'DELETE' });
                    const data = await response.json();
                    localStorage.removeItem('cache-categorias');
                    return data;
                }
                catch (error) {
                    console.error('Erro ao excluir o item: ', error);
                }
            };
            document.querySelectorAll('button[id^="delete-btn-"]').forEach((btn) => {
                const id = btn.id.substring(11, 50);
                btn.addEventListener('click', () => {
                    deletarItem(id);
                    alert('item deletado com sucesso! atualize a página.');
                });
            });
        }
        catch (err) {
            let msg = 'Não foi possível recuperar as categorias.';
            document.querySelector('.erro-listar-categorias').innerHTML = msg;
        }
    }
    static formattedDataCurrent() {
        const date = new Date();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        const year = date.getFullYear();
        const formattedData = `${year}-${month}-${day}`;
        return formattedData;
    }
    async onSubmit(event) {
        event.preventDefault();
        const nome = this.campoNome.value;
        const status = 'ATIVO';
        const criacao = Categoria.formattedDataCurrent();
        const novaCategoria = new CriaCategoria(nome, status);
        try {
            const response = await fetch('http://localhost:4000/categorias', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(novaCategoria),
            });
            const data = await response.json();
            alert(`Categoria ${data.nome} cadastrada com sucesso! Atualize a página.`);
            localStorage.removeItem('cache-categorias');
            this.campoNome.value = '';
            this.campoNome.focus();
        }
        catch (error) {
            console.error('Não foi possível salvar a categoria! Aguarde uns minutos e tente novamente.');
        }
    }
}
