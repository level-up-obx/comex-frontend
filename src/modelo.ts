import { v4 as uuidv4 } from 'uuid';

class Pessoa {
  id: string;
  nome: string;
  criacao: string;

  constructor(nome: string) {
    this.id = uuidv4();
    this.nome = nome;
    const today = new Date();
    this.criacao = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  }
}

export class CriaCategoria extends Pessoa {
    _status: string;

  constructor(nome: string, status: string) {
    super(nome)
    this._status = status;
  }
}

export class Produto extends Pessoa {
  url: string;
  descricao: string;
  preco: number;
  quantidade_estoque: number;
  categoria: string;

  constructor(nome: string, url: string, descricao: string, preco: number, quantidade_estoque: number, categoria: string) {
    super(nome);
    this.url = url;
    this.descricao = descricao;
    this.preco = preco;
    this.quantidade_estoque = quantidade_estoque;
    this.categoria = categoria;
  }
}

class Endereco {
  rua: string;
  numero: number;
  bairro: string;
  cidade: string;
  estado: string;
  cep: string;
  complemento: string;
}

class Cliente extends Pessoa {
  sobrenome: string;
  cpf: string;
  telefone: string;
  endereco: Endereco;
  email: string;

  constructor(nome: string, sobrenome: string, cpf: string, telefone: string, endereco: Endereco, email: string) {
    super(nome);
    this.sobrenome = sobrenome;
    this.cpf = cpf;
    this.telefone = telefone;
    this.endereco = endereco;
    this.email = email;
  }
}

