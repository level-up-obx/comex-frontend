import { v4 as uuidv4 } from 'uuid';

// console.log(uuidv4())

const categorias = []
const produtos = []
const clientes = []

export const salvaCategoria = (categoria) => categorias.push(categoria)
export const listaCategorias = () => categorias

export const salvaProduto = (produto) => produtos.push(produto)
export const listaProdutos = () => produtos

export const salvaCliente = (cliente) => clientes.push(cliente)
export const listaCliente = () => clientes

export const consultaEndereco = (cep) => {
    let url = `https://viacep.com.br/ws/${cep}/json/`
    return fetch(url).then(resp => resp.json()).then(dadosJSON => dadosJSON)
}