import { getUuid } from "./api.js"
import { getDate } from "./api.js"


export class Category {
  public name: String;
  public uuid: String;
  public status: String;
  public createdAt: String;

  constructor(name: String) {
    this.name = name;
    this.uuid = getUuid();
    this.status = "ATIVA";
    this.createdAt = getDate();
  }
}

export class Product {
  public uuid: String;
  public name: String;
  public description: String;
  public price: Number;
  public qtd: Number;
  public category: String;
  public createdAt: String;
  public img: String;

  constructor(name: String, description: String, price: Number, qtd: Number, category: String) {
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
  public uuid: String;
  public name: String;
  public cpf: String;
  public birth: Date;
  public email: String;
  public contact: String;
  public address: Address;

  constructor(name: String, cpf: String, birth: Date, email: String, contact: String, cep: String, address: String, number: String, complement: String, district: String, city: String, state: String) {
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
  public cep: String;
  public address: String;
  public number: String;
  public complement: String;
  public district: String;
  public city: String;
  public state: String;

  constructor(cep: String, address: String, number: String, complement: String, district: String, city: String, state: String) {
    this.cep = cep;
    this.address = address;
    this.number = number;
    this.complement = complement;
    this.district = district;
    this.city = city;
    this.state = state;

  }

}

