import * as modelo from './modelo.js';
import * as api from './api.js';

function exibeCategoria(categoria) {
    console.log(modelo.categoriaFormatada(categoria));
}

function exibreProduto(produto) {
    console.log(modelo.produtoFormatado(produto));
}

function exibeCliente(cliente) {
    console.log(modelo.clienteFormatado(cliente));
}

let informatica = modelo.criaCategoria('INFORMÁTICA');
let moveis = modelo.criaCategoria('MÓVEIS');
let livros = modelo.criaCategoria('LIVROS');

api.salvaCategoria(informatica);
api.salvaCategoria(moveis);
api.salvaCategoria(livros);
api.listaCategoria().forEach(c => exibeCategoria(c));
console.log(); // Quebra Linha

let notebookSamsung = modelo.criaProduto('Notebook Samsung', 'Notebook de alta qualidade', 3523.00, 1, informatica);
let cleanArchitecture = modelo.criaProduto('Clean Architecture', 'Livro brabo', 102.90, 2, livros);
let monitorDell = modelo.criaProduto('Monitor Dell 27', 'Monitor gigante', 1889.00, 3, informatica);

api.salvaProdutos(notebookSamsung);
api.salvaProdutos(cleanArchitecture);
api.salvaProdutos(monitorDell);
api.listaProdutos().forEach(p => exibreProduto(p));
console.log(); // Quebra Linha

let bruceEndereco = await api.consultaEndereco('01153000');
let edsonEndereco = await api.consultaEndereco('80060180');
let michaelEndereco = await api.consultaEndereco('13484019');

let bruce = modelo.criaCliente('Bruce', 'Wayne', '111.222.333-44', '(11)98888-7777', 'batman@gmail.com', bruceEndereco);
let edson = modelo.criaCliente('Edson', 'Arantes', '222.333.444-55', '(41)97777-6666', 'pele@gmail.com', edsonEndereco);
let michael = modelo.criaCliente('Michal', 'Jordan', '333.444.555-66', '(13)96666-5555', 'king@gmail.com', michaelEndereco);

api.salvaCliente(bruce);
api.salvaCliente(edson);
api.salvaCliente(michael);
api.listaClientes().forEach(cl => exibeCliente(cl));
