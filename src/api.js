import { v4 as uuidv4 } from 'uuid';

const categorias = [];
const produtos = [];
const clientes = [];

export function salvaCategoria(categoria) {
    categorias.push(categoria);
}

export function listaCategoria() {
    return categorias;
}

export function salvaProdutos(produto) {
    produtos.push(produto);
}

export function listaProdutos() {
    return produtos;
}

export function salvaCliente(cliente) {
    clientes.push(cliente);
}

export function listaClientes() {
    return clientes;
}

export async function consultaEndereco(cep) {
    try {
        let url = `http://www.viacep.com.br/ws/${cep}/json/`;
        let req = await fetch(url);
        let json = await req.json();
        return {
            cep: json.cep,
            complemento: json.complemento,
            bairro: json.bairro,
            localidade: json.localidade,
            uf: json.uf,
            ddd: json.ddd
        }
    } catch (error) {
        console.error(error);
    }
}
