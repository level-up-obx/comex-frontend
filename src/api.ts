import { Categoria } from "./models/categoria.js"
import { Produto } from "./models/produto.js"
import { Cliente } from "./models/clientes"

const categorias: Array<Categoria> = []
const produtos: Array<Produto> = []
const clientes: Array<Cliente> = []

export function salvaCategoria(categoria: Categoria) {
  categorias.push(categoria)
}

export function listaCategorias() {
  return categorias
}

export function salvaProduto(produto: Produto) {
  produtos.push(produto)
}

export function listaProduto() {
  return produtos
}

export function salvaCliente(cliente: Cliente) {
  clientes.push(cliente)
}

export function listaClientes() {
  return clientes
}