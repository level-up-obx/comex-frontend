declare class Pessoa {
    id: string;
    nome: string;
    criacao: string;
    constructor(nome: string);
}
export declare class CriaCategoria extends Pessoa {
    _status: string;
    constructor(nome: string, status: string);
}
export declare class Produto extends Pessoa {
    url: string;
    descricao: string;
    preco: number;
    quantidade_estoque: number;
    categoria: string;
    constructor(nome: string, url: string, descricao: string, preco: number, quantidade_estoque: number, categoria: string);
}
export {};
