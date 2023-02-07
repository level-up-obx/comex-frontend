import { criaCategoria, criaProduto } from './modelo.js'
import { salvaCategorias, listaCategorias, salvaProdutos, listaProdutos } from './api.js'

// Categorias
const INFORMÁTICA = criaCategoria('INFORMÁTICA' ,'2023/06/21' , 'ATIVA')
const MÓVEIS = criaCategoria('MÓVEIS' ,'2019/11/11' , 'ATIVA')
const LIVROS = criaCategoria('LIVROS' ,'2020/07/28' , 'ATIVA')

salvaCategorias(INFORMÁTICA)
salvaCategorias(MÓVEIS)
salvaCategorias(LIVROS)

// modelo de exibição ---> <ID GERADO>: INFORMÁTICA (<CRIAÇÃO> - ATIVA)
// console.log(`${INFORMÁTICA.id}: ${INFORMÁTICA.nome} (${INFORMÁTICA.status + ' - ' + INFORMÁTICA.criacao})`)
// console.log(`${MÓVEIS.id}: ${MÓVEIS.nome} (${MÓVEIS.status + ' - ' + MÓVEIS.criacao})`)
// console.log(`${LIVROS.id}: ${LIVROS.nome} (${LIVROS.status + ' - ' + LIVROS.criacao})`)


// Produtos
const notebook_samsung = criaProduto('Notebook Samsung', null, 3523.00, 1, 'Informática')
const clean_architecture = criaProduto('Clean Architecture', null, 102.90, 2, 'Livros')
const monitor_dell = criaProduto('Monitor Dell 27', null, 1889.00, 3, 'Informática')

salvaProdutos(notebook_samsung)
salvaProdutos(clean_architecture)
salvaProdutos(monitor_dell)

console.log('Lista Categorias',listaCategorias())
console.log('Lista Produtos',listaProdutos())
