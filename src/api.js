import { v4 as uuidv4 } from "/node_modules/uuid/dist/esm-browser/index.js";
// import { v4 as uuidv4 } from "uuid";

/*================= Produto =================*/
const getError = (error) => {
  throw new Error("Ocorreu um erro!", { cause: error });
};
/*================= Categoria =================*/
const arrCategory = [];

export const saveCategory = (name) => {
  arrCategory.push(name);
  return arrCategory;
};

export const categoryList = () => {
  return arrCategory;
};

export const getUuid = () => {
  return uuidv4();
};

/*================= Produto =================*/
const arrProduct = [];

export const saveProduct = (product) => {
  arrProduct.push(product);
  return arrProduct;
};
export const productList = () => {
  return arrProduct;
};

/*================= Cliente =================*/
const arrClient = [];

export const saveClient = (client) => {
  arrClient.push(client);
  return arrClient;
};
export const clientList = () => {
  return arrClient;
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