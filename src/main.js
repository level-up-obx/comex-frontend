import { criaCategoria, criaProduto, criaCliente } from './modelo.js'
import {
    salvaCategorias,
    salvaProdutos,
    salvaClientes,
    listaCategorias,
    listaProdutos,
    listaClientes
} from './api.js'

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

console.log('Lista Categorias',listaCategorias())

// Produtos
const notebook_samsung = criaProduto('Notebook Samsung', null, 3523.00, 1, 'Informática')
const clean_architecture = criaProduto('Clean Architecture', null, 102.90, 2, 'Livros')
const monitor_dell = criaProduto('Monitor Dell 27', null, 1889.00, 3, 'Informática')

salvaProdutos(notebook_samsung)
salvaProdutos(clean_architecture)
salvaProdutos(monitor_dell)

console.log('Lista Produtos',listaProdutos())

//Cliente
const Cliente1 = criaCliente(
    'Cristiano',
    'Ronaldo',
    '333.333.333-33',
    '(11) 99999-9999',
    {
        rua: 'rua tal',
        numero: 12,
        bairro: 'bairro tal',
        cidade: 'cidade tal',
        estado: 'são paulo',
        cep: 456456213,
        complemento: 'perto da padaria'
    })

const Cliente2 = criaCliente(
    'Vini',
    'Junior',
    '333.333.333-33',
    '(11) 99999-9999',
    {
        rua: 'rua tal',
        numero: 12,
        bairro: 'bairro tal',
        cidade: 'cidade tal',
        estado: 'são paulo',
        cep: 456456213,
        complemento: 'perto da padaria'
    })
const Cliente3 = criaCliente(
    'Luiz',
    'Henrique',
    '333.333.333-33',
    '(11) 99999-9999',
    {
        rua: 'rua tal',
        numero: 12,
        bairro: 'bairro tal',
        cidade: 'cidade tal',
        estado: 'são paulo',
        cep: 456456213,
        complemento: 'perto da padaria'
    })

salvaClientes(Cliente1)
salvaClientes(Cliente2)
salvaClientes(Cliente3)

console.log('Lista Clientes',listaClientes())
