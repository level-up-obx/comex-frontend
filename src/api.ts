interface Categoria {
    nome: string;
    descricao: string;
  }

  const categorias: Categoria[] = [];

  export function salvaCategorias(novaCategoria: Categoria): number {
    return categorias.push(novaCategoria);
  }

  export function listaCategorias(): Categoria[] {
    return categorias;
  }

  interface Produto {
    nome: string;
    descricao: string;
    preco: number;
  }

  const produtos: Produto[] = [];

  export function salvaProdutos(novoProduto: Produto): number {
    return produtos.push(novoProduto);
  }

  export function listaProdutos(): Produto[] {
    return produtos;
  }

  interface Cliente {
    nome: string;
    email: string;
    telefone: string;
  }

  const clientes: Cliente[] = [];

  export function salvaClientes(novoCliente: Cliente): number {
    return clientes.push(novoCliente);
  }

  export function listaClientes(): Cliente[] {
    return clientes;
  }
