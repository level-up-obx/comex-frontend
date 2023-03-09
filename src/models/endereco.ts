export class Endereco {
  constructor(
    private logradouro: string,
    private bairro: string,
    private cidade: string,
    private numero: string,
  ){
    this.logradouro = logradouro
    this.bairro = bairro
    this.cidade = cidade
    this.numero = numero
  }

  criaEndereco() {
    return {
      logradouro: this.logradouro,
      bairro: this.bairro,
      cidade: this.cidade,
      numero: this.numero
    }
  }
}

// const endereco = {
//   logradouro: logradouro.value,
//   bairro: bairro.value,
//   cidade: cidade.value,
//   numero: numero.value
// }