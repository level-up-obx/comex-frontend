// import { v4 as uuidv4 } from '/node_modules/uuid/dist/esm-browser/index.js'
// import { v4 as uuidv4 } from '/node_modules/@types/uuid/index.d.ts'
import { v4 as uuidv4 } from 'uuid'

function getDate() {
  return new Date().toLocaleDateString().split('/').reverse().join('-')
}

export function criaCategoria(nome: string) {
  return {
    nome,
    id: uuidv4(),
    status: 'ATIVA',
    criacao: getDate()
  }
}

export function criaProduto(
  nome: string, 
  descricao: string, 
  preco: number, 
  estoque: number, 
  categoria: string
) {
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

export function criaCliente(
  nome: string, 
  sobrenome: string, 
  cpf: string, 
  telefone: string, 
  endereco: object
) {
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