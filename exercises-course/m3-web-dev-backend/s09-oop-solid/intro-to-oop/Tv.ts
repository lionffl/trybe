class Tv {
  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: string[];
  private _connectedTo: string = '';

  constructor(brand: string, size: number, resolution: string, connections: string[]) {
    this._brand = brand;
    this._size = size;
    this._resolution = resolution;
    this._connections = connections;
    this.turnOn();
  }

  turnOn = () => console.log(`brand: ${this._brand} size: ${this._size} 
  resolution: ${this._resolution} connections: ${this._connections}`)

  get connectedTo() {
    return this._connectedTo;
  }
  
  set connectedTo(connection: string) {
    if (this._connections.includes(connection)) {
      this._connectedTo = connection;
    } else { this._connectedTo = 'Sorry, this connection is not available!' }
  }
}

const roomTv = new Tv('samsung', 50, '4k', ['HDMI', 'DVI', 'VGA']);

roomTv.connectedTo = 'a';

console.log(roomTv.connectedTo);

roomTv.connectedTo = 'HDMI';

console.log(roomTv.connectedTo);

