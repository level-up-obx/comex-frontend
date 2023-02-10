import * as modelo from './modelo.js'
import * as api from './api.js'

let endereco = api.consultaEndereco('07810310').then(endereco => console.log(endereco))

function mostrarConteudo(funcao){
    console.log(funcao) 
}

api.salvaCategoria(modelo.criaCategoria('INFORMÁTICA'))
api.salvaCategoria(modelo.criaCategoria('MÓVEIS'))
api.salvaCategoria(modelo.criaCategoria('LIVROS'))
mostrarConteudo(api.listaCategorias())

api.salvaProduto(modelo.criaProduto('Samsung', "notebook samsung", 3523.00, 1, api.listaCategorias()[0].nome))
api.salvaProduto(modelo.criaProduto('Clean Architecture','clean architecture' , 102.90, 2, api.listaCategorias()[1].nome))
api.salvaProduto(modelo.criaProduto('Monitor Dell 27', 'monitor dell', 1889.00, 3, api.listaCategorias()[2].nome))
mostrarConteudo(api.listaProdutos())

api.salvaCliente(modelo.criaCliente('Fulano', 'de Tal', '11122233344', '1140028922', endereco))
mostrarConteudo(api.listaCliente())








