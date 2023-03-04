declare class Categoria {
    nome: string;
    descricao: string;
}
export declare function salvaCategorias(novaCategoria: Categoria): number;
export declare function listaCategorias(): Categoria[];
declare class Produto {
    nome: string;
    descricao: string;
    preco: number;
}
export declare function salvaProdutos(novoProduto: Produto): number;
export declare function listaProdutos(): Produto[];
declare class Cliente {
    nome: string;
    email: string;
    telefone: string;
}
export declare function salvaClientes(novoCliente: Cliente): number;
export declare function listaClientes(): Cliente[];
export {};
