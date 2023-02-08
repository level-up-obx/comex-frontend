import { v4 as uuidv4 } from 'uuid'

const categorias = []
const produtos = []
const clientes = []

export function salvaCategoria(categoria) {
  categorias.push(categoria)
}

export function listaCategorias() {
  return categorias
}

export function salvaProduto(produto) {
  produtos.push(produto)
}

export function listaProduto() {
  return produtos
}

export function salvaCliente(cliente) {
  clientes.push(cliente)
}

export function listaClientes() {
  return clientes
}