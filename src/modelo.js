import { v4 as uuidv4 } from "uuid"

export function criaCategoria(nome) {
  return {
    nome,
    id: uuidv4(),
    status: 'ATIVA',
    criacao: new Date(Date.now()).toLocaleString().split(',')[0].split('/').reverse().join('/')
  }
}

export function criaProduto(nome, descricao, preco, estoque, categoria) {
  return {
    id: uuidv4(),
    nome,
    descricao,
    preco,
    estoque,
    categoria,
    criacao: new Date(Date.now()).toLocaleString().split(',')[0].split('/').reverse().join('/')
  }
}

export function criaCliente(nome, sobrenome, cpf, telefone, endereco) {
  return {
    id: uuidv4(),
    nome,
    sobrenome,
    cpf,
    telefone,
    endereco,
    criacao: new Date(Date.now()).toLocaleString().split(',')[0].split('/').reverse().join('/')
  }  
}