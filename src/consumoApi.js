const urlAPI = 'http://localhost:3000/'
export const apiPost = (tipo, corpoAPI) => {
    
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
                if(tipo === 'categorias') alert(`Categoria ${ data.nome } cadastrada com sucesso.`)
                else if(tipo === 'produtos') alert(`Produto ${ data.nome } cadastrado com sucesso.`) 
                else if(tipo === 'clientes') alert(`Cliente ${ data.nome } (CPF: ${ data.cpf }) cadastrado com sucesso."`)
            })
        } else alert('Erro no cadastro, por favor, tente novamente.')
    })
}
