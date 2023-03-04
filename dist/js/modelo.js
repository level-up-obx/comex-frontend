"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.criaCliente = exports.criaProduto = exports.criaCategoria = void 0;
var uuid_1 = require("uuid");
function criaCategoria(nome, status, criacao) {
    return {
        id: (0, uuid_1.v4)(),
        nome: nome,
        status: status,
        criacao: criacao
    };
}
exports.criaCategoria = criaCategoria;
function criaProduto(nome, url, descricao, preco, quantidade_estoque, categoria) {
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    return {
        id: (0, uuid_1.v4)(),
        nome: nome,
        url: url,
        descricao: descricao,
        preco: preco,
        quantidade_estoque: quantidade_estoque,
        categoria: categoria,
        criacao: date
    };
}
exports.criaProduto = criaProduto;
function criaCliente(nome, sobrenome, cpf, telefone, endereco, email) {
    return {
        id: (0, uuid_1.v4)(),
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
        email: email
    };
}
exports.criaCliente = criaCliente;
