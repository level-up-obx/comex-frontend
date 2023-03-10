import { Categoria, Cliente, Produto } from './modelo-classes.js';

// ============================= Requisição temporaria =============================
const API_URL = 'http://localhost:3000'

function efetuaRequisicao(url: string, metodo: string = 'GET', payload: any = null): Promise<Response> {
    let opcoes = {
        method: metodo
    };

    if (payload) {
        opcoes['headers'] = { 'Content-Type': 'application/json' };
        opcoes['body'] = JSON.stringify(payload)
    }

    return fetch(API_URL + url, opcoes)
        .catch(erro => {
            console.log(`Erro em ${metodo} ${url}`, erro);
            return Promise.reject(erro);
        });
}

// ============================= Salvar na api fake =============================
// Categorias
export function salvaCategoria(categoria: Categoria): Promise<Categoria> {
    return fetch('http://localhost:3000/categorias', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(categoria)
    })
        .then(() => {
            alert(`Categoria ${categoria.nome} cadastrada com sucesso.`);
            localStorage.removeItem('categorias');
            return categoria;
        }).catch((erro) => Promise.reject())
}

// Produtos
export function salvaProdutos(produto: Produto): void {
    try {
        fetch('http://localhost:3000/produtos', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(produto)
        });
        alert(`Produto ${produto.nome} cadastrado com sucesso.`);
    }
    catch {
        alert('Erro ao cadastrar produto.');
    }
}

// Clientes
export function salvaCliente(cliente: Cliente): void {
    try {
        fetch('http://localhost:3000/clientes', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(cliente)
        });
        alert(`Cliente ${cliente.nome} portador do CPF: ${cliente.cpf}, cadastrado(a) com sucesso.`);
    }
    catch {
        alert('Erro ao tentar castrar cliente, tente novamente mais tarde.');
    }
}

// ============================= Tras os itens salvos na API fake para a pagina =============================
export async function buscaCategorias(): Promise<any> {
    try {
        let url = await fetch('http://localhost:3000/categorias');
        let req = await url.json();
        return req;
    } catch {
        console.error('Não foi possível recuperar as categorias.');
    }
}

export async function buscaProdutosApi(): Promise<any> {
    try {
        let url = await fetch('http://localhost:3000/produtos');
        let req = await url.json();
        return req;
    } catch {
        console.error('Não foi possível recuperar os produtos.');
    }
}

// ============================= Exclui categorias =============================
export function excluiCategoria(id: string): Promise<void> {
    return fetch(`http://localhost:3000/categorias/${id}`, {
        method: 'DELETE',
    })
        .then(resposta => {
            localStorage.removeItem("categorias")
            console.log(`Categoria ${id} removida.`);
        }).catch(erro => Promise.reject('Erro...'))
}

//============================= Atualiza categoria =============================
export function atualizaCategoria(categoria: Categoria): Promise<Categoria> {
    return fetch(`http://localhost:3000/categorias/${categoria.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(categoria)
    }).then(() => {
        localStorage.removeItem('categorias');
        return categoria;
    }).catch(() => Promise.reject('Não foi possivel alterar categoria, tente novamente mais tarde.'));
}

// ============================= Muda status da categoria =============================
export function alteraStatusCategoria(id: string, status: string): Promise<void> {
    return efetuaRequisicao(`/categorias/${id}`, 'PATCH', { status })
        .then(resposta => localStorage.removeItem('categorias'));
}

// FUNÇÃO QUE VOU USAR DEPOIS

// export function alteraStatusCategoria(id: string, status: string): Promise<void> {
//     return fetch(`http://localhost:3000/categorias/${id}`, {
//         method: 'PATCH',
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(status)
//     }).then(resposta => {
//         localStorage.removeItem('categorias');
//     })
//         .catch(() => Promise.reject('Não foi possível alterar o status da categoria.'));
// }

// ============================= API VIACEP =============================
export async function consultaEndereco(cep: string): Promise<any> {
    let url = `https://viacep.com.br/ws/${cep}/json/`;
    let req = await fetch(url);
    let data = await req.json();
    return data;
}