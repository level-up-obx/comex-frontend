export class Categoria {
  constructor(
    private categoria: string
  ) {
    this.categoria = categoria
  }
  criaCategoria() {
    return {
      categoria: this.categoria
    }
  }
}