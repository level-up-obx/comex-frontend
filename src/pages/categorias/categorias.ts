import { v4 as uuidv4 } from 'uuid'
import { CriaCategoria } from '../../modelo.js';

class Categorias {
    private _campoNome: HTMLInputElement;
    private _form: HTMLFormElement;

    constructor(campoNome: string, form: string) {
        this._campoNome = this._campoNome = document.querySelector("#nome")
        this._form = this._form = document.querySelector("#formCategoria")
    }

    createContent(categorias: any[]): void {
        let html = '';
        categorias.forEach(item => {
            html +=  /* html */ `
                    <tr>
                        <td>${item.nome}</td>
                        <td>${item.status}</td>
                        <td>${item.criacao}</td>

                    </tr>`;
        });

        document.querySelector('tbody').innerHTML = html;
    }

    async listarCategorias() {
        try {
            let categorias;
            let categoriasNoCache = localStorage.getItem('cache-categorias')

            if (categoriasNoCache) {
                categorias = JSON.parse(categoriasNoCache)
                return this.createContent(categorias)
            }

            const response = await fetch('http://localhost:3000/categorias');
            const newCategorias = await response.json();
            localStorage.setItem('cache-categorias', JSON.stringify(newCategorias))

            this.createContent(newCategorias)

            const deletarItem = async (uuid: string) => {
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
    }

    formattedDataCurrent(): string {
        const date = new Date();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        const year = date.getFullYear();
        const formattedData = `${year}-${month}-${day}`;
        return formattedData // exemplo de saída: "2023-02-15"
    }

    adicionarCategoria() {
        this._form.addEventListener("submit", (event) => {
            event.preventDefault();

            let id = uuidv4()
            let nome = this._campoNome.value
            let status = "ATIVO"
            let criacao = this.formattedDataCurrent()

            let novaCategoria = new CriaCategoria(id, nome, status, criacao)

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

            this._campoNome.value = ''
            this._campoNome.focus()
        });
    }
}

