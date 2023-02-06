import { v4 as uuidv4 } from 'uuid'

export function criaCategoria(id, nome, status, criacao) {
    return {
        id: id,
        nome: nome,
        status: status,
        criacao: criacao
    }
}

export function criaProduto(nome, descricao, preco, quantidade_estoque, categoria) {
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

     return {
        id: uuidv4(), //uuid gerado para o produto;
        nome: nome, //o nome do produto;
        descricao: descricao, //informações sobre as características do produto;
        preco: preco, //preço cobrado pelo produto;
        quantidade_estoque: quantidade_estoque, //quantos itens desse produto estão,
        categoria: categoria,
        criacao: date
     }
}
