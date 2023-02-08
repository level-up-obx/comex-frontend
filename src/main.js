import { criaCategoria, criaProduto, criaCliente } from "./modelo.js";
import {
  salvaCategoria,
  listaCategorias,
  listaProduto,
  salvaProduto,
  listaClientes,
  salvaCliente,
} from "./api.js";

const categoriasIniciais = ["INFORMATICA", "MOVEIS", "LIVROS"];
categoriasIniciais.map((categoria) => {
  salvaCategoria(categoria);
});

const produtosIniciais = [
  {
    nome: "Notebook Samsung",
    preco: 3523,
    estoque: 1,
    categoria: "INFORMATICA",
  },
  { nome: "Clean Architecture", preco: 102.9, estoque: 2, categoria: "LIVROS" },
  {
    nome: "Monitor Dell 27",
    preco: 1889,
    estoque: 3,
    categoria: "INFORMATICA",
  },
];
produtosIniciais.map((produto) => {
  salvaProduto(produto);
});
// export function criaCliente(nome, sobrenome, cpf, telefone, endereco) {
const clientesIniciais = [
  {
    nome: "Bruno",
    sobrenome: "Gonçalves",
    idade: 41641641626,
    telefone: 11987695886,
    endereco: (async () => {
      const data = await fetch('https://viacep.com.br/ws/04430270/json')
      return data.json()
    })()
  },
  {
    nome: "Laís",
    sobrenome: "Gonzaga",
    idade: 41641641627,
    telefone: 11987695887,
    endereco: (async () => {
      const data = await fetch('https://viacep.com.br/ws/04430370/json')
      return data.json()
    })()
  },
];

// console.log(clientesIniciais[0]);

clientesIniciais.map((cliente) => {
  salvaCliente(cliente);
});

const _categorias = listaCategorias();
const _produtos = listaProduto();
const _clientes = listaClientes();
const categorias = [];
const produtos = [];
const clientes = [];

_categorias.map((categoria) => {
  categorias.push(criaCategoria(categoria));
});

_produtos.map((produto) => {
  produtos.push(
    criaProduto(
      produto.nome,
      "",
      produto.preco,
      produto.estoque,
      produto.categoria
    )
  );
});

_clientes.map((cliente) => {
  clientes.push(criaCliente(cliente.nome, cliente.sobrenome, cliente.cpf, cliente.telefone, cliente.endereco));
});

function imprimeCategorias() {
  categorias.forEach((obj) =>
    console.log(`${obj.id}: ${obj.nome} (${obj.criacao} - ${obj.status})`)
  );
}

function imprimeProdutos() {
  console.log(produtos);
}

function imprimeClientes() {
  console.log(clientes);
}


async function imprimeCliente() {
  clientes.map(async cliente => {
    await cliente.endereco
    console.log(cliente)
  })
}
imprimeCliente()