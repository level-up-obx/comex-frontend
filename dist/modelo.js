"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = exports.CriaCategoria = void 0;
const uuid_1 = require("uuid");
class Pessoa {
    id;
    nome;
    criacao;
    constructor(nome) {
        this.id = (0, uuid_1.v4)();
        this.nome = nome;
        const today = new Date();
        this.criacao = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    }
}
class CriaCategoria extends Pessoa {
    _status;
    constructor(nome, status) {
        super(nome);
        this._status = status;
    }
}
exports.CriaCategoria = CriaCategoria;
class Produto extends Pessoa {
    url;
    descricao;
    preco;
    quantidade_estoque;
    categoria;
    constructor(nome, url, descricao, preco, quantidade_estoque, categoria) {
        super(nome);
        this.url = url;
        this.descricao = descricao;
        this.preco = preco;
        this.quantidade_estoque = quantidade_estoque;
        this.categoria = categoria;
    }
}
exports.Produto = Produto;
class Endereco {
    rua;
    numero;
    bairro;
    cidade;
    estado;
    cep;
    complemento;
}
class Cliente extends Pessoa {
    sobrenome;
    cpf;
    telefone;
    endereco;
    email;
    constructor(nome, sobrenome, cpf, telefone, endereco, email) {
        super(nome);
        this.sobrenome = sobrenome;
        this.cpf = cpf;
        this.telefone = telefone;
        this.endereco = endereco;
        this.email = email;
    }
}
//# sourceMappingURL=modelo.js.map