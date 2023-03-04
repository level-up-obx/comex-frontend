class Categoria {
    nome;
    descricao;
}
const categorias = [];
export function salvaCategorias(novaCategoria) {
    return categorias.push(novaCategoria);
}
export function listaCategorias() {
    return categorias;
}
class Produto {
    nome;
    descricao;
    preco;
}
const produtos = [];
export function salvaProdutos(novoProduto) {
    return produtos.push(novoProduto);
}
export function listaProdutos() {
    return produtos;
}
class Cliente {
    nome;
    email;
    telefone;
}
const clientes = [];
export function salvaClientes(novoCliente) {
    return clientes.push(novoCliente);
}
export function listaClientes() {
    return clientes;
}
