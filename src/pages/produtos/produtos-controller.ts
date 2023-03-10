import { Produto } from '../../modelo.js';

class ProdutosController {
    private _form: HTMLFormElement;

    constructor() {
        this._form = document.querySelector("#formProdutos")
    }

    adicionarProduto() {
        this._form.addEventListener('submit', (event) => {
            event.preventDefault()

            let nome = this._form.querySelector<HTMLInputElement>('input[name="nome"]');
            let url = this._form.querySelector<HTMLInputElement>('input[name="url"]');
            let descricao = this._form.querySelector<HTMLInputElement>('textarea[name="descricao"]');
            let _preco = this._form.querySelector<HTMLInputElement>('input[name=preco]');
            let _quantidade = this._form.querySelector<HTMLInputElement>('input[name="quantidade"]');
            let categoria = this._form.querySelector<HTMLInputElement>('select[name="categoria"]');

            let preco = parseInt(_preco!.value)
            let quantidade = parseInt(_quantidade!.value)

            let novoProduto = new Produto(
                nome!.value,
                url!.value,
                descricao!.value,
                preco,
                quantidade,
                categoria!.value
            );

            fetch('http://localhost:3000/produtos', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(novoProduto),
            })
            .then((response) => response.json())
            .then((data) => {
                console.log(`Produto ${data.nome} cadastrada com sucesso.`);
            })
            .catch((error) => {
                console.error('Não foi possível salvar o produto! Aguarde uns minutos e tente novamente.');
            });

            nome!.value = ''
            url!.value = ''
            descricao!.value = ''
            _preco!.value = ''
            _quantidade!.value = ''
            categoria!.value = ''

            nome.focus()

            // console.log(novoProduto)


        })
    }

}

const produtos = new ProdutosController();
produtos.adicionarProduto();
