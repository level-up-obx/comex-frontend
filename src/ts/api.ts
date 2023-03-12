import { Client } from "./model";
import { createTableRow } from "../pages/categories/categories.js";

/*====================== URL API ======================*/
const api: string = "http://localhost:3000";

/*====================== Função de executar o requisição ======================*/
function doRequisition(
  route: string,
  method: string = "GET",
  payload: any = null
): Promise<any> {
  let options: Record<string, any> = {
    method: method,
  };
  if (payload) {
    (options.headers = { "Content-Type": "application/json" }),
      (options.body = JSON.stringify(payload));
  }

  return fetch(api + route, options).catch((error) => {
    console.log(`Erro em ${method}, ${route}`, error);
    Promise.reject(error);
  });
}

/*====================== Função de erros e Mensagens ======================*/
function setError(message: string, error?: Error): void {
  setMessage(message);
  throw new Error("Ocorreu algum erro!", error);
}
function setMessage(message: string): void {
  alert(message);
  console.log(message);
}
/*====================== Categoria ======================*/
import { Category } from "./model.js";

export function saveCategory(category: Category): Promise<void> {
  return doRequisition("/categorias", "POST", category).then((response) => {
    if (response.status === 201) {
      setMessage(`Categoria: ${category.name} adicionada com sucesso! `);
      localStorage.removeItem("categories");
    } else {
      return;
    }
  });
}

export function listCategory(): Promise<Category[]> {
  return doRequisition("/categorias").then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      return;
    }
  });
}

/*====================== Produto ======================*/
import { Product } from "./model.js";

export function saveProduct(product: Product): Promise<void> {
  return doRequisition("/produtos", "POST", product).then((response) => {
    if (response.status === 201) {
      setMessage(`Produto: ${product.name} adicionada com sucesso!`);
    } else {
      return;
    }
  });
}

export function listProduct(): Promise<Product[]> {
  return doRequisition("/produtos").then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      return;
    }
  });
}

/*====================== Cliente ======================*/
export function saveClient(client: Client): Promise<void> {
  return doRequisition("/clientes", "POST", client).then((response) => {
    if (response.status === 201) {
      setMessage(
        `Cliente ${client.name} - ${client.cpf} adicionado com sucesso!`
      );
    }
  });
}

/*====================== CEP ======================*/
export function cep(cep: number): Promise<any> {
  return fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((response) => {
      return response.json();
    })
    .catch((error) =>
      setError(
        `Não foi possível buscar o cep: ${cep}. Tente novamente em alguns minutos...`,
        error
      )
    );
}
