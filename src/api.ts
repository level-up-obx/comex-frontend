export class SalvaCategorias {
    private categorias: any[] = [];
    constructor(categorias: any[]) { this.categorias = categorias }

    salvaCategorias(novaCategorias: any[]): number {return this.categorias.push(...novaCategorias)}
    listaCategorias(): any[] { return this.categorias }
}

export class SalvaProdutos{
    private produtos: any[] = [];
    constructor(produtos: any[]) { this.produtos = produtos }

    salvaProdutos(novoProduto: any[]): number {return this.produtos.push(...novoProduto)}
    listaProdutos(): any[] { return this.produtos }
}

export class SalvaClientes {
    private clientes: any[] = [];
    constructor(clientes: any[]) { this.clientes = clientes }

    salvaClientes(novoCliente: any[]): number {return this.clientes.push(...novoCliente)}
    listaClientes(): any[] { return this.clientes }
}

// const tal =[{id: 1, nome: 'joao'}]

// const result = new SalvaCategorias(tal)
//console.log(result['categorias'])
