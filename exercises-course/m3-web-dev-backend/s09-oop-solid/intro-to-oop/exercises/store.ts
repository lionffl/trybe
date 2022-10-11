class Client {
  private _nome: string;

  constructor(nome: string) {
    this._nome = nome;
  }

  get nome() {
    return this._nome;
  }
}

class Item {
  private _nome: string;
  private _preco: number;
  
  constructor(nome: string, preco: number) {
    this._nome = nome;
    this._preco = preco;
  }

  get nome() {
    return this._nome;
  }

  get preco() {
    return this._preco;
  }
}

class Order {
  private _cliente: Client;
  private _consumo: Item[];
  private _pagamento: string;
  private _temDesconto: boolean;
  private _desconto: number;

  constructor(cliente: Client, pagamento: string, temDesconto: boolean, desconto: number) {
    this._consumo = [];
    this._desconto = 0;
    this._cliente = cliente;
    this._temDesconto = temDesconto;
    this._pagamento = pagamento;
    this.desconto = desconto;
  }
  get cliente() {
    return this._cliente;
  }

  get consumo() {
    return this._consumo;
  }

  get desconto() {
    return this._desconto;
  }

  set desconto(desconto: number) {
    if (desconto <= 0) this._desconto = 0;
    if (desconto >= 1) this._desconto = 1;
    else this._desconto = desconto;
  }
  
  get pagamento() {
    return this._pagamento;
  }

  public addItem(item: Item) {
    this._consumo.push(item);
  }

  public getTotalNoDiscount() {
    const prices: number[] = this._consumo.map((item) => item.preco);
    return prices.reduce((pV, cV) => pV + cV, 0)
  }

  public getTotalWithDiscount() {
    const prices: number[] = this._consumo.map((item) => item.preco);
    const total = prices.reduce((pV, cV) => pV + cV, 0);
    const result = (1 - this._desconto) * total;
    return result;
  }
}