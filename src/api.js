const categorias = []

export function salvaCategorias(novaCategorias) { return categorias.push(novaCategorias) }
export function listaCategorias() { return categorias }

const produtos = []

export function salvaProdutos(novoProduto) { return produtos.push(novoProduto) }
export function listaProdutos() { return produtos }

const clientes = []

export function salvaClientes(novoCliente) { return clientes.push(novoCliente) }
export function listaClientes() { return clientes }
