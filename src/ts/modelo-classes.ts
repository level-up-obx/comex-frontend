import { v4 as uuidv4 } from 'uuid';

function dataFormatada() {
    return new Date()
        .toLocaleDateString("en-US")
        .split(',')[0]
        .split('/')
        .reverse()
        .join('-');
}

export class Categoria {

    public constructor(
        public readonly nome: string,
        public readonly id: string = uuidv4(),
        public readonly status: string = 'ATIVA',
        public readonly criacao: string = dataFormatada()) { }

    public get estaAtiva(): boolean {
        return this.status == 'ATIVA';
    }
}

export class Produto {

    public constructor(
        public readonly nome: string,
        public readonly descricao: string,
        public readonly preco: number,
        public readonly quantidade: number,
        public readonly url: string,
        public readonly categoria: string,
        public readonly criacao: string = dataFormatada(),
        public readonly id: string = uuidv4()) { }
}

export class Cliente {

    public constructor(
        public readonly nome: string,
        public readonly sobrenome: string,
        public readonly cpf: string,
        public readonly telefone: string,
        public readonly email: string,
        public readonly endereco: Endereco,
        public readonly id: string = uuidv4()) {
    }
}

export class Endereco {

    public constructor(
        public readonly cep: string,
        public readonly cidade: string,
        public readonly bairro: string,
        public readonly logradouro: string,
        public readonly uf: string,
        public readonly complemento: string,
        public readonly numero: string = '0') { }
}