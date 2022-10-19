"use strict";
class Tv {
    constructor(brand, size, resolution, connections) {
        this._connectedTo = '';
        this.turnOn = () => console.log(`brand: ${this._brand} size: ${this._size} 
  resolution: ${this._resolution} connections: ${this._connections}`);
        this._brand = brand;
        this._size = size;
        this._resolution = resolution;
        this._connections = connections;
        this.turnOn();
    }
    get connectedTo() {
        return this._connectedTo;
    }
    set connectedTo(connection) {
        if (this._connections.includes(connection)) {
            this._connectedTo = connection;
        }
        else {
            this._connectedTo = 'Sorry, this connection is not available!';
        }
    }
}
const roomTv = new Tv('samsung', 50, '4k', ['HDMI', 'DVI', 'VGA']);
roomTv.connectedTo = 'a';
console.log(roomTv.connectedTo);
roomTv.connectedTo = 'HDMI';
console.log(roomTv.connectedTo);
