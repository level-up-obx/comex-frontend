import { criaProduto, Produto } from '../modelo.js';

let formProdutos = document.querySelector<HTMLFormElement>('#formProdutos');

formProdutos.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    let nome = (event.target as HTMLFormElement).elements.namedItem('nome') as HTMLInputElement;
    let url = (event.target as HTMLFormElement).elements.namedItem('url') as HTMLInputElement;
    let descricao = (event.target as HTMLFormElement).elements.namedItem('descricao') as HTMLInputElement;
    let precoString = (event.target as HTMLFormElement).elements.namedItem('preco') as HTMLInputElement;
    let quantidadeString = (event.target as HTMLFormElement).elements.namedItem('quantidade') as HTMLInputElement;
    let categoria = (event.target as HTMLFormElement).elements.namedItem('categoria') as HTMLInputElement;

    let preco = parseInt(precoString.value)
    let quantidade = parseInt(quantidadeString.value)

    let novoProduto: Produto = criaProduto(
        nome.value,
        url.value,
        descricao.value,
        preco,
        quantidade,
        categoria.value
    );

    fetch('http://localhost:3000/produtos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(novoProduto),
    })
    .then((response) => response.json())
    .then((data: Produto) => {
        console.log(`Produto ${data.nome} cadastrada com sucesso.`);
    })
    .catch((error) => {
        console.error('Não foi possível salvar o produto! Aguarde uns minutos e tente novamente.');
    });

        nome.value = '';
        url.value = '';
        descricao.value = '';
        precoString.value = '';
        quantidadeString.value = '';
        categoria.value = '';
        nome.focus();

    // console.log(novoProduto)
});
