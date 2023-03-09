import { v4 as uuidv4 } from 'uuid';

const data = new Date().toLocaleString().split(',')[0].split('/').reverse().join('-')

export class Categoria {

    private _id: string
    private _status: string
    private _data: string 

    constructor(public readonly _nome: string){
        this._id = uuidv4()
        this._status = "ATIVO"
        this._data = data
    }

    get id() {
        return this._id
    }

    get status() {
        return this._status
    }

    get data() {
        return this._data
    }
}

export class Produto {

    constructor(public readonly nome: string, public readonly descricao: string, public readonly preco: string, public readonly url:string, public readonly quantidade: string, private _categoria: string) {}

    get categoria() {
        return this._categoria
    }
}

export class Cliente {
    
    constructor(private _nome: string, private _sobrenome: string, private _cpf:string, private _telefone: string, private _endereco: Object) {}

    get nome() {
        return this._nome
    }

    get sobrenome() {
        return this._sobrenome
    }

    get cpf() {
        return this._cpf
    }

    get telefone() {
        return this._telefone
    }

    get endereco() {
        return this._endereco
    }

}

/* 
export const criaCliente = (nome, sobrenome, cpf, telefone, endereco) => {
    return{
        id: uuidv4(),
        nome,
        sobrenome,
        cpf,
        telefone,
        endereco
    }
}


 */