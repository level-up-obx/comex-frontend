import { v4 as uuidv4 } from 'uuid';

export class Categoria {
    private id: string

    constructor(
        id: string,
        nome: string,
        status: string,
        criacao: string
    ) {
        this.id = uuidv4()
    }
}

export class CriaProduto {
    private _id: string;
    private _nome: string;
    private _url: string;
    private _descricao: string;
    private _preco: number;
    private _quantidade_estoque: number;
    private _categoria: string;
    private _criacao: string;

    constructor(
      nome: string,
      url: string,
      descricao: string,
      preco: number,
      quantidade_estoque: number,
      categoria: string,
    ) {
      this._id = uuidv4();
      this._nome = nome;
      this._url = url;
      this._descricao = descricao;
      this._preco = preco;
      this._quantidade_estoque = quantidade_estoque;
      this._categoria = categoria;
      this._criacao = new Date().toISOString().substring(0,10);
    }
  }


  class Endereco {
    rua: string;
    numero: string;
    bairro: string;
    cidade: string;
    estado: string;
    cep: string;
    complemento: string;
  }

  export class CriaCliente {
    private _id: string;

    constructor(
        nome: string,
        sobrenome: string,
        cpf: string,
        telefone: string,
        endereco: Endereco,
        email: string,
    ) {
        this._id = uuidv4();
    }
}
