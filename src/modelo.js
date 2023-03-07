"use strict";
exports.__esModule = true;
exports.CriaCliente = exports.CriaProduto = exports.CriaCategoria = void 0;
var uuid_1 = require("uuid");
var CriaCategoria = /** @class */ (function () {
    function CriaCategoria(id, nome, status, criacao) {
        this.id = (0, uuid_1.v4)();
    }
    return CriaCategoria;
}());
exports.CriaCategoria = CriaCategoria;
var CriaProduto = /** @class */ (function () {
    function CriaProduto(nome, url, descricao, preco, quantidade_estoque, categoria) {
        this._id = (0, uuid_1.v4)();
        this._nome = nome;
        this._url = url;
        this._descricao = descricao;
        this._preco = preco;
        this._quantidade_estoque = quantidade_estoque;
        this._categoria = categoria;
        this._criacao = new Date().toISOString().substring(0, 10);
    }
    return CriaProduto;
}());
exports.CriaProduto = CriaProduto;
var Endereco = /** @class */ (function () {
    function Endereco() {
    }
    return Endereco;
}());
var CriaCliente = /** @class */ (function () {
    function CriaCliente(nome, sobrenome, cpf, telefone, endereco, email) {
        this._id = (0, uuid_1.v4)();
    }
    return CriaCliente;
}());
exports.CriaCliente = CriaCliente;
