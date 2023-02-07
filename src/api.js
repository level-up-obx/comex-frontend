const categorias = []

export function salvaCategorias(newCategorias) { return categorias.push(newCategorias) }
export function listaCategorias() { return categorias }

const produtos = []

export function salvaProdutos(newProdutos) { return produtos.push(newProdutos) }
export function listaProdutos() { return produtos }
