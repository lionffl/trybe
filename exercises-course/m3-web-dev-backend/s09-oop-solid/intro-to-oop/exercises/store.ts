export class Client {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get name() {
    return this._name;
  }
}

export class Item {
  private _name: string;
  private _price: number;
  
  constructor(name: string, price: number) {
    this._name = name;
    this._price = price;
  }

  get name() {
    return this._name;
  }

  get price() {
    return this._price;
  }
}

export class Order {
  private _client: Client;
  private _consumption: Item[];
  private _method: string;
  private _hasDiscount: boolean;
  private _discount: number;

  constructor(client: Client, method: string, hasDiscount: boolean, discount: number) {
    this._consumption = [];
    this._discount = 0;
    this._client = client;
    this._hasDiscount = hasDiscount;
    this._method = method;
    this.discount = discount;
  }
  get client() {
    return this._client;
  }

  get consumption() {
    return this._consumption;
  }

  get method() {
    return this._method;
  }

  get discount() {
    return this._discount;
  }

  set discount(discount: number) {
    if (discount <= 0 || !this._hasDiscount) this._discount = 0;
    if (discount >= 1) this._discount = 1;
    else this._discount = discount;
  }

  public addItem(item: Item) {
    this._consumption.push(item);
  }

  public getTotalWithNoDiscount() {
    const prices: number[] = this._consumption.map((item) => item.price);
    return prices.reduce((pV, cV) => pV + cV, 0)
  }

  public getTotalWithDiscount() {
    const prices: number[] = this._consumption.map((item) => item.price);
    const total = prices.reduce((pV, cV) => pV + cV, 0);
    const result = (1 - this._discount) * total;
    return result;
  }
}