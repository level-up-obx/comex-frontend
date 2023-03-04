import { v4 as uuidv4 } from 'uuid';
class Categoria {
    id;
    nome;
    status;
    criacao;
}
export class Produto {
    id;
    nome;
    url;
    descricao;
    preco;
    quantidade_estoque;
    categoria;
    criacao;
}
class Endereco {
    rua;
    numero;
    bairro;
    cidade;
    estado;
    cep;
    complemento;
}
class Cliente {
    id;
    nome;
    sobrenome;
    cpf;
    telefone;
    endereco;
    email;
}
export function criaCategoria(nome, status, criacao) {
    return {
        id: uuidv4(),
        nome: nome,
        status: status,
        criacao: criacao
    };
}
export function criaProduto(nome, url, descricao, preco, quantidade_estoque, categoria) {
    const today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    return {
        id: uuidv4(),
        nome: nome,
        url: url,
        descricao: descricao,
        preco: preco,
        quantidade_estoque: quantidade_estoque,
        categoria: categoria,
        criacao: date
    };
}
export function criaCliente(nome, sobrenome, cpf, telefone, endereco, email) {
    return {
        id: uuidv4(),
        nome: nome,
        sobrenome: sobrenome,
        cpf: cpf,
        telefone: telefone,
        endereco: {
            rua: endereco.rua,
            numero: endereco.numero,
            bairro: endereco.bairro,
            cidade: endereco.cidade,
            estado: endereco.estado,
            cep: endereco.cep,
            complemento: endereco.complemento
        },
        email: email
    };
}
