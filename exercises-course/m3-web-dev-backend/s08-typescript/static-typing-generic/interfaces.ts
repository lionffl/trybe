interface Car {
  brand: string
  year: number
  model: string
  type: string
}

interface Feline {
  race: string
  age: number
  speed: number
}

interface Aircraft {
  type: string
  year: number
  speed: number
}

interface Cat extends Feline {
  name: string
  meow(): string
}

interface Kitty extends Cat, Feline {
  play(): string
}

const car1: Car = {
  brand: 'fiat',
  year: 2015,
  model: "siena",
  type: "sedan"
}

const cat1: Cat = {
  name: 'Dinha',
  meow: function (): string {
    return `${this.name} is playing`
  },
  race: 'persa',
  age: 3,
  speed: 20
}