import { criaCategoria } from './modelo.js'
import { v4 as uuidv4 } from 'uuid'
import { salvaCategorias, listaCategorias} from './api.js'

const INFORMÁTICA = criaCategoria(uuidv4(), 'INFORMÁTICA' ,'2023/06/21' , 'ATIVA')
const MÓVEIS = criaCategoria(uuidv4(), 'MÓVEIS' ,'2019/11/11' , 'ATIVA')
const LIVROS = criaCategoria(uuidv4(), 'LIVROS' ,'2020/07/28' , 'ATIVA')

salvaCategorias(INFORMÁTICA)
salvaCategorias(MÓVEIS)
salvaCategorias(LIVROS)

console.log(listaCategorias())

// modelo de exibição ---> <ID GERADO>: INFORMÁTICA (<CRIAÇÃO> - ATIVA)
// console.log(`${INFORMÁTICA.id}: ${INFORMÁTICA.nome} (${INFORMÁTICA.status + ' - ' + INFORMÁTICA.criacao})`)
// console.log(`${MÓVEIS.id}: ${MÓVEIS.nome} (${MÓVEIS.status + ' - ' + MÓVEIS.criacao})`)
// console.log(`${LIVROS.id}: ${LIVROS.nome} (${LIVROS.status + ' - ' + LIVROS.criacao})`)
