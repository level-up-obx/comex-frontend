import { Data } from "./data.js"
import { v4 as uuidv4 } from 'uuid'

export class Cliente {  
  constructor(
    private nome: string,
    private sobrenome: string,
    private cpf: string,
    private telefone: string,
    private endereco: object
  ) {}

  criaCliente() {
    return {
      id: uuidv4(),
      nome: this.nome,
      sobrenome: this.sobrenome,
      cpf: this.cpf,
      telefone: this.telefone,
      endereco: this.endereco,
      criacao: Data.data()
    }  
  }
}