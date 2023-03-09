import { Data } from "./data.js"
import { v4 as uuidv4 } from 'uuid'


export class Produto {
  constructor(
    private nome: string,
    private descricao: string,
    private preco: number,
    private estoque: number,
    private categoria: string
  ) {
    this.nome = nome
    this.descricao = descricao
    this.preco = preco
    this.estoque = estoque
    this.categoria = categoria
  }

  criaProduto() {
    return {
      id: uuidv4(),
      nome: this.nome,
      descricao: this.descricao,
      preco: this.preco,
      estoque: this.estoque,
      categoria: this.categoria,
      data: Data.data()
    }
  }
}