import { v4 as uuidv4 } from '/node_modules/uuid/dist/esm-browser/index.js';

const data = new Date().toLocaleString().split(',')[0].split('/').reverse().join('-')

export const criaCategoria = (nome) => {
    return {
        id: uuidv4(),
        nome: nome,
        status: "ATIVO",
        data: data,
        nomeCategoria(){
            return this.nome
        }
    }
}

export const criaProduto = (nome, descricao, preco, url, quantidade, categoria) => {
    return{
        id: uuidv4(),
        nome,
        descricao,
        preco,
        quantidade,
        url,
        categoria,
        criacao: data
    }
}

export const criaCliente = (nome, sobrenome, cpf, telefone, endereco) => {
    return{
        id: uuidv4(),
        nome,
        sobrenome,
        cpf,
        telefone,
        endereco
    }
}


