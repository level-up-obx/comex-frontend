"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listaClientes = exports.salvaClientes = exports.listaProdutos = exports.salvaProdutos = exports.listaCategorias = exports.salvaCategorias = void 0;
class Categoria {
    nome;
    descricao;
}
const categorias = [];
function salvaCategorias(novaCategoria) {
    return categorias.push(novaCategoria);
}
exports.salvaCategorias = salvaCategorias;
function listaCategorias() {
    return categorias;
}
exports.listaCategorias = listaCategorias;
class Produto {
    nome;
    descricao;
    preco;
}
const produtos = [];
function salvaProdutos(novoProduto) {
    return produtos.push(novoProduto);
}
exports.salvaProdutos = salvaProdutos;
function listaProdutos() {
    return produtos;
}
exports.listaProdutos = listaProdutos;
class Cliente {
    nome;
    email;
    telefone;
}
const clientes = [];
function salvaClientes(novoCliente) {
    return clientes.push(novoCliente);
}
exports.salvaClientes = salvaClientes;
function listaClientes() {
    return clientes;
}
exports.listaClientes = listaClientes;
//# sourceMappingURL=api.js.map