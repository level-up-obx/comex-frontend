import { v4 as uuidv4 } from 'uuid'

const categorias = []

export function salvaCategorias(newCategorias) {
    return categorias.push(newCategorias)
}

export function listaCategorias(param) {
    return categorias
}
