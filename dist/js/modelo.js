import { getUuid } from "./api.js";
import { getDate } from "./api.js";
export class Category {
    name;
    uuid;
    status;
    createdAt;
    constructor(name) {
        this.name = name;
        this.uuid = getUuid();
        this.status = "ATIVA";
        this.createdAt = getDate();
    }
}
export class Product {
    uuid;
    name;
    description;
    price;
    qtd;
    category;
    createdAt;
    constructor(name, description, price, qtd, category) {
        this.uuid = getUuid();
        this.name = name;
        this.description = description;
        this.price = price;
        this.qtd = qtd;
        this.category = category;
        this.createdAt = getDate();
    }
}
export class Client {
    uuid;
    name;
    cpf;
    birth;
    email;
    contact;
    address;
    constructor(name, cpf, birth, email, contact, cep, address, number, complement, district, city, state) {
        this.uuid = getUuid();
        this.name = name;
        this.cpf = cpf;
        this.birth = birth;
        this.email = email;
        this.contact = contact;
        this.address = new Address(cep, address, number, complement, district, city, state);
    }
}
export class Address {
    cep;
    address;
    number;
    complement;
    district;
    city;
    state;
    constructor(cep, address, number, complement, district, city, state) {
        this.cep = cep;
        this.address = address;
        this.number = number;
        this.complement = complement;
        this.district = district;
        this.city = city;
        this.state = state;
    }
}
