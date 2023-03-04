declare class Produto {
    url?: string;
    nome: string;
    preco: number;
}
declare class ListagemDeProdutos {
    private url;
    constructor(url: string);
    listaProdutos(): Promise<void>;
}
declare const listagemDeProdutos: ListagemDeProdutos;
