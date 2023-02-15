/*================= Import principais =================*/
import * as model from "./modelo.js";
import * as api from "./api.js";

/*================= Exibicoes =================*/
const showCategories = () => {
    const category = api.categoryList().map((category) => {
        console.log(`<${category.uuid}>: ${category.name} (${category.status} - ${category.createdAt})`)
    })
    return category
}

const showProducts = () => {
const formatter = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'})
    const product = api.productList().map((product) => {
        console.log(`${product.name} => Quantidade em estoque ${product.stock} ${formatter.format(product.price * product.stock)}`)
    })
    return product
}

const showClient = () => {
    const client = api.clientList().map((client) => {
        console.log(`
        Nome: ${client.name} ${client.lastName}\n
        CPF: ${client.cpf}\n
        Contato: ${client.telephone}\n
        Endereco: ${client.address.street} - ${client.address.city}`)
    })
    return client
}

/*================= Declaracao e salvamento das categorias =================*/
const computing = model.createCategory("Informática")
const furniture = model.createCategory("Móveis")
const books = model.createCategory("Livros")

api.saveCategory(computing);
api.saveCategory(furniture);
api.saveCategory(books);

/*================= Declaracao e salvamento dos produtos =================*/
const notebookSamsung = model.createProduct('Notebook Samsung', 'aaa', 3523.00, 1, computing)
const cleanArch = model.createProduct('Clean Architecture', 'bbb', 102.90, 2, furniture)
const monitorDell = model.createProduct('Monitor Dell', '27', 1889.90 , 3, books)

api.saveProduct(notebookSamsung);
api.saveProduct(cleanArch);
api.saveProduct(monitorDell);

/*================= Declaracao e salvamento dos clientes =================*/
const elizabeth = model.createClient('Elizabeth', 'Black', '223.154.169-95', '(13)3434-6585', await api.getCep(11340050))

api.saveClient(elizabeth)