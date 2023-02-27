import { v4 as uuidv4 } from "/node_modules/uuid/dist/esm-browser/index.js";
// import { v4 as uuidv4 } from "uuid";
const url = "http://localhost:3000"

/*================= UUID =================*/
export const getUuid = () => {
  return uuidv4();
};

/*================= Error =================*/
const getError = (error) => {
  throw new Error("Ocorreu um erro!", { cause: error });
};

/*================= Categoria =================*/
export const saveCategory = (name) => {
  try {
    const post = fetch(`${url}/categorias`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(name),
    });
    window.alert(`Categoria: ${name.name} Cadastrada com sucesso!`);
  } catch (error) {
    window.alert(
      "Não foi possível salvar a categoria! Aguarde uns minutos e tente novamente."
    );
    getError(error);
  }
};

export const categoryList = async () => {
  try {
    const response = await fetch(`${url}/categorias`);
    const data = await response.json();
    return data;
  } catch (error) {
    window.alert("Não foi possível recuperar as categorias!")
    getError(error)
  }
};

/*================= Produto =================*/
export const saveProduct = (product) => {
  try {
    const post = fetch(`${url}/produtos`, {
      method: "POST",
      headers: { 
        "Content-Type":"application/json" 
      },
      body: JSON.stringify(product)
    })
    window.alert(`Produto: ${product.name} Cadastrado com sucesso!`)
  } catch (error) {
    window.alert("Não foi possível salvar o produto! Aguarde uns minutos e tente novamente")
    getError(error)
  }
};
export const productList = async () => {
  try {
    const response = await fetch(`${url}/produtos`)
    const data = await response.json();
    return data;
  } catch (error) {
    window.alert("Não foi possível exibir os produtos! Aguarde uns minutos e tente novamente")
    getError(error)
  }
};

/*================= Cliente =================*/
export const saveClient = async (client) => {
  try {
    const post = await fetch(`${url}/clientes`, {
      method: "POST",
      headers: {
         "Content-Type": "application/json" 
      },
      body: JSON.stringify(client)
    })
    window.alert(`Cliente ${client.name} (${client.cpf}) cadastrado com sucesso.`);
  } catch (error) {
    window.alert("Não foi possível cadastrar o cliente! Aguarde uns minutos e tente novamente.");
    getError(error)
  }
};
export const clientList = () => {
  // return arrClient;
};

/*================= Cliente =================*/
export const getCep = async (cep) => {
  try {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    const response = await fetch(url);
    const data = await response.json();
    return {
      street: data.logradouro,
      district: data.bairro,
      city: data.localidade,
      state: data.uf,
    };
  } catch (error) {
    getError(error);
  }
};
