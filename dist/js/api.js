"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listaClientes = exports.salvaClientes = exports.listaProdutos = exports.salvaProdutos = exports.listaCategorias = exports.salvaCategorias = void 0;
var categorias = [];
function salvaCategorias(novaCategoria) {
    return categorias.push(novaCategoria);
}
exports.salvaCategorias = salvaCategorias;
function listaCategorias() {
    return categorias;
}
exports.listaCategorias = listaCategorias;
var produtos = [];
function salvaProdutos(novoProduto) {
    return produtos.push(novoProduto);
}
exports.salvaProdutos = salvaProdutos;
function listaProdutos() {
    return produtos;
}
exports.listaProdutos = listaProdutos;
var clientes = [];
function salvaClientes(novoCliente) {
    return clientes.push(novoCliente);
}
exports.salvaClientes = salvaClientes;
function listaClientes() {
    return clientes;
}
exports.listaClientes = listaClientes;
