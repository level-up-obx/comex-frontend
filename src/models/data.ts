export class Data {
  static data(): string {
    return new Date().toLocaleDateString().split('/').reverse().join('-')
  }
}