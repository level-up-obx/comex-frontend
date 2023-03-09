import { Categoria, Cliente, Produto } from './modelo.js'

const urlAPI = 'http://localhost:3000/'
export const apiPost = (tipo: string, corpoAPI: Categoria | Cliente | Produto) => {
    
    fetch(`${urlAPI}${tipo}`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(corpoAPI)
    }).then(resp => {
        if (resp.status === 201) {
            return resp.json().then(data => {
                console.log(data)
                if(tipo === 'categorias') alert(`Categoria ${ data._nome } cadastrada com sucesso.`)
                else if(tipo === 'produtos') alert(`Produto ${ data._nome } cadastrado com sucesso.`) 
                else if(tipo === 'clientes') alert(`Cliente ${ data._nome } (CPF: ${ data._cpf }) cadastrado com sucesso."`)
            })
        } else alert('Erro no cadastro, por favor, tente novamente.')
    })
}
