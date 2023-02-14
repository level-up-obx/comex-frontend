import { v4 as uuidv4 } from '/node_modules/uuid/dist/esm-browser/index.js'

function getDate() {
  return new Date().toLocaleDateString().split('/').reverse().join('-')
}

export function criaCategoria(nome) {
  return {
    nome,
    id: uuidv4(),
    status: 'ATIVA',
    criacao: getDate()
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
    criacao: getDate()
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
    criacao: getDate()
  }  
}