import { v4 as uuidv4 } from '/node_modules/uuid/dist/esm-browser/index.js'

export function criaCategoria(nome, status, criacao) {
    return {
        id: uuidv4(),
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

export function criaCliente(nome, sobrenome, cpf, telefone, endereco) {
    return {
        id: uuidv4(),
        nome: nome,
        sobrenome: sobrenome,
        cpf: cpf,
        telefone: telefone,
        endereco: {
            rua: endereco.rua,
            numero: endereco.numero,
            bairro: endereco.bairro,
            cidade: endereco.cidade,
            estado: endereco.estado,
            cep: endereco.cep,
            complemento: endereco.complemento
        },
    }
}
