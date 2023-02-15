import { getCep, getUuid } from "./api.js";

const getDate = () => {
  return new Date()
    .toLocaleDateString("en-US")
    .split(",")[0]
    .split("/")
    .reverse()
    .join("-");
};

/*================= Categoria =================*/
export const createCategory = (arrCategoryList) => {
  return {
    uuid: getUuid(),
    name: arrCategoryList,
    status: "ATIVA",
    createdAt: getDate(),
  };
};

/*================= Produto =================*/
export const createProduct = (
  productName,
  description,
  price,
  quantity,
  category
) => {
  return {
    uuid: getUuid(),
    name: productName,
    description: description,
    price: price,
    stock: quantity,
    category: category,
    createdAt: getDate(),
  };
};

/*================= Cliente =================*/
export const createClient = (name, lastName, cpf, telephone, address) => {
  return {
    uuid: getUuid(),
    name: name,
    lastName: lastName,
    cpf: cpf,
    telephone: telephone,
    address: address,
  };
};
