import { criaCategoria } from './modelo.js'
import { v4 as uuidv4 } from 'uuid'

const INFORMÁTICA = criaCategoria(uuidv4(), 'INFORMÁTICA' ,'2023/06/21' , 'ATIVA')
const MÓVEIS = criaCategoria(uuidv4(), 'MÓVEIS' ,'2019/11/11' , 'ATIVA')
const LIVROS = criaCategoria(uuidv4(), 'LIVROS' ,'2020/07/28' , 'ATIVA')
