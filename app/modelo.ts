import { getUuid } from "./api.js"
import { getDate } from "./api.js"


// export class Category {
//   public name: String;
//   public uuid: String;
//   public status: String;
//   public createdAt: String;

//   constructor(name: String) {
//     this.name = name;
//     this.uuid = getUuid();
//     this.status = "ATIVA";
//     this.createdAt = getDate();
//   }

// }

export class Category {
  public constructor(
    private _name: string,
    private _uuid: String = getUuid(),
    private _status: String = "ATIVA",
    private _createdAt: String = getDate()
  ) { }

  public get uuid(): String {
    return this._uuid;
  }

  public get name(): string {
    return this._name;
  }

  public get status(): String {
    return this._status;
  }

  public get createdAt(): String {
    return this._createdAt;
  }
}


export class Product {
  public constructor(
    private _name: string,
    private _description: String,
    private _price: Number,
    private _qtd: Number,
    private _category: String,
    private _img: String = "assets/img/product8.jpg",
    private _uuid: String = getUuid(),
    private _createdAt: String = getDate()

  ) { }

  public get name(): String {
    return this._name
  }

  public get description(): String {
    return this._description
  }

  public get price(): Number {
    return this._price
  }

  public get qtd(): Number {
    return this._qtd
  }

  public get category(): String {
    return this._category
  }

  public get img(): String {
    return this._img
  }

  public get uuid(): String {
    return this._uuid
  }

  public get createdAt(): String {
    return this._createdAt
  }

}

export class Client {

  private _name: String;
  private _cpf: String;
  private _birth: Date;
  private _email: String;
  private _contact: String;
  private _address: Address;
  private _uuid: String;

  public constructor(
    name: String,
    cpf: String,
    birth: Date,
    email: String,
    contact: String,
    cep: String,
    address: String,
    number: String,
    complement: String,
    district: String,
    city: String,
    state: String,
  ) {
    this._name = name;
    this._cpf = cpf;
    this._birth = birth;
    this._email = email;
    this._contact = contact;
    this._uuid = getUuid();
    this._address = new Address(cep, address, number, complement, district, city, state);

  }

  public get name(): String {
    return this._name
  }

  public get cpf(): String {
    return this._cpf
  }

  public get birth(): Date {
    return this._birth
  }

  public get email(): String {
    return this._email
  }

  public get contact(): String {
    return this._contact
  }

  public get address(): Address {
    return this._address
  }

  public get uuid(): String {
    return this._uuid
  }

}


export class Address {
  public constructor(
    private _cep: String,
    private _address: String,
    private _number: String,
    private _complement: String,
    private _district: String,
    private _city: String,
    private _state: String,

  ) { }

  public get cep(): String {
    return this._cep
  }

  public get address(): String {
    return this._address
  }

  public get number(): String {
    return this._number
  }

  public get complement(): String {
    return this._complement
  }

  public get district(): String {
    return this._district
  }

  public get city(): String {
    return this._city
  }

  public get state(): String {
    return this._state
  }

}

