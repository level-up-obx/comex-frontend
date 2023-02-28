import { v4 as uuidv4 } from '/node_modules/uuid/dist/esm-browser/index.js';

const categorias = [];
const produtos = [];
const clientes = [];

// ============================= Salva categoria na API fake =============================
export function salvaCategoria(categoria) {
    fetch('http://localhost:3000/categorias', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(categoria),
    })
        .then((response) => response.json())
        .then((data) => {
            alert(`Categoria ${data.nome} cadastrada com sucesso.`);
        })
        .catch(() => {
            console.error('Não foi possivel salvar a categoria, aguarde alguns minutos e tente novamente.');
        })
}

export function listaCategoria() {
    return categorias;
}

// ============================= Salva produtos na API fake =============================
export function salvaProdutos(produto) {
    fetch('http://localhost:3000/produtos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(produto),
    })
        .then((response) => response.json())
        .then((data) => {
            alert(`Produto ${data.nome} cadastrado com sucesso.`);
        })
        .catch(() => {
            console.error('Não foi possivel salvar o produto, aguarde alguns minutos e tente novamente.');
        })
}

export function listaProdutos() {
    return produtos;
}

// ============================= Salva clientes na API fake =============================
export function salvaCliente(cliente) {
    fetch('http://localhost:3000/clientes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(cliente),
    })
        .then((response) => response.json())
        .then((data) => {
            alert(`Cliente ${data.nome} (${data.cpf}) cadastrado com sucesso`)
        })
        .catch(() => {
            console.error('Não foi possível cadastrar o cliente! Aguarde uns minutos e tente novamente.')
        })
}

export function listaClientes() {
    return clientes;
}

// ============================= Tras os itens salvos na API fake para a pagina =============================
export async function buscaCategorias(categoria) {
    try {
        let url = await fetch('http://localhost:3000/categorias')
        let req = await url.json()
        return req
    } catch {
        console.error('Não foi possível recuperar as categorias.')
    }
}

export async function buscaProdutos(produto) {
    try {
        let url = await fetch('http://localhost:3000/produtos')
        let req = await url.json()
        return req
    } catch {
        console.error('Não foi possível recuperar os produtos.')
    }
}


// ============================= API VIACEP =============================
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