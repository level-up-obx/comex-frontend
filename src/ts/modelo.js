import { v4 as uuidv4 } from 'uuid';

function dataFormat() {
    const data = new Date();
    let ano = data.getFullYear();
    let mes = data.getMonth() + 1;
    let dia = data.getDate();

    if (mes < 10) {
        mes = `0${mes}`;
    }
    if (dia < 10) {
        dia = `0${dia}`;
    }
    return `${ano}/${mes}/${dia}`;
}

export function criaCategoria(categoria) {
    return {
        uuid: uuidv4(),
        nome: categoria,
        status: 'ATIVA',
        criacao: dataFormat()
    };
}

export function categoriaFormatada(categoria) {
    return `\n ID: ${categoria.uuid}, Categoria: ${categoria.nome} \n
    Criação/Status: (${categoria.criacao} '${categoria.status}')`;
}

export function criaProduto(nome, descricao, preco, quantidade, categoria, url) {
    return {
        id: uuidv4(),
        nome: nome,
        descricao: descricao,
        preco: preco,
        quantidade: quantidade,
        categoria: categoria,
        url: url,
        criacao: dataFormat()
    };
}


export function produtoFormatado(produto) {
    return `\n PRODUTO: \n 
    ID: ${produto.id}, Nome: ${produto.nome} \n
    Preço: R$${produto.preco.toFixed(2)} \n
    Quantidade em estoque: ${produto.quantidade} , Valor total do produto em estoque: R$${(produto.quantidade * produto.preco).toFixed(2)} \n
    Imposto cobrado por produto é de 10%: R$${(produto.preco * 10 / 100).toFixed(2)}`;
}

export function criaCliente(nome, sobrenome, cpf, telefone, email, endereco) {
    return {
        id: uuidv4(),
        nome: nome,
        sobrenome: sobrenome,
        cpf: cpf,
        telefone: telefone,
        email: email,
        endereco: endereco
    };
}

export function clienteFormatado(cliente) {
    return `\n CLIENTE: \n
    Nome: ${cliente.nome} \n
    Sobrenome: ${cliente.sobrenome} \n
    CPF: ${cliente.cpf} \n
    Telefone: ${cliente.telefone} \n
    Email: ${cliente.email} \n
    Endereço: ${cliente.endereco.cep}
                ${cliente.endereco.complemento}
                ${cliente.endereco.bairro}
                ${cliente.endereco.localidade}
                ${cliente.endereco.uf}
                ${cliente.endereco.ddd}`;
}