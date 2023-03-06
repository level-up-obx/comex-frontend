import { v4 as uuidv4 } from "uuid";

function today(): string {
  return new Date()
    .toLocaleDateString("en-US")
    .split(",")[0]
    .split("/")
    .reverse()
    .join("-");
};


/*====================== Modelo cliente ======================*/
export class Client {
  public readonly uuid: string;
  public readonly name: string;
  public readonly lastName: string;
  public readonly cpf: string;
  public readonly telephone: string;
  public readonly address: Address;
  public readonly id: number;

  constructor(
    name: string,
    lastName: string,
    cpf: string,
    telephone: string,
    address: Address
  ) {
    this.uuid = uuidv4();
    this.name = name;
    this.lastName = lastName;
    this.cpf = cpf;
    this.telephone = telephone;
    this.address = address;
  }
}
/*====================== Modelo categoria ======================*/
export class Category {
  public readonly uuid: string;
  public readonly name: string;
  public readonly status: string;
  public readonly createdAt: string;
  public readonly id: number;

  constructor(name: string) {
    this.uuid = uuidv4(),
    this.name = name,
    this.status = "Ativa",
    this.createdAt = today();
  }
}

/*====================== Modelo produto ======================*/
export class Product {
  public readonly uuid: string;
  public readonly name: string;
  public readonly description: string;
  public readonly price: number;
  public readonly quantity: number;
  public readonly category: string;
  public readonly photo: string;
  public readonly id: number;

  constructor(name: string, description: string, price: number, quantity: number, category: string, photo: string) {
    this.uuid = uuidv4();
    this.name = name;
    this.description = description;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.photo = photo;
  }
}

/*====================== Modelo endereço ======================*/
export class Address {

    public readonly street: string;
    public readonly number: number;
    public readonly complement: string;
    public readonly neighborhood: string;
    public readonly city: string;
    public readonly state: string;

    constructor(street: string, number: number, complement: string, neighborhood: string, city: string, state: string) {
        this.street = street;
        this.number = number;
        this.complement = complement;
        this.neighborhood = neighborhood;
        this.city = city;
        this.state = state;
    }
}
