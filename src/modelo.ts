import { v4 as uuidv4 } from 'uuid';

export class Categoria {
    private id: string
    private nome: string
    private status: string
    private criacao: string

    constructor(
        nome: string,
        status: string,
        criacao: string
    ) {
        this.id = uuidv4()
        this.nome = nome
        this.status = status
        this.criacao = criacao
    }
}

export class Produto {
    private id: string;
    private nome: string;
    private url: string;
    private descricao: string;
    private preco: number;
    private quantidade_estoque: number;
    private categoria: string;
    private criacao: string;

    constructor(
      nome: string,
      url: string,
      descricao: string,
      preco: number,
      quantidade_estoque: number,
      categoria: string,
    ) {
      this.id = uuidv4();
      this.nome = nome;
      this.url = url;
      this.descricao = descricao;
      this.preco = preco;
      this.quantidade_estoque = quantidade_estoque;
      this.categoria = categoria;
      this.criacao = new Date().toISOString().substring(0,10);
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

  export class Cliente {
    private _id: string;
    private nome: string;
    private sobrenome: string;
    private cpf: string;
    private telefone: string;
    private endereco: Endereco;
    private email: string;

    constructor(
        nome: string,
        sobrenome: string,
        cpf: string,
        telefone: string,
        endereco: Endereco,
        email: string,
    ) {
        this._id = uuidv4(),
        this.nome = nome
        this.sobrenome = sobrenome
        this.cpf = cpf
        this.telefone = telefone
        this.endereco = endereco
        this.email = email
    }
}
