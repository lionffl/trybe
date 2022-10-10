export default class Car {
  brand: string
  color: string
  doors: number

  constructor(brand: string, color: string, doors: number) {
    this.brand = brand
    this.color = color
    this.doors = doors
  }

  honk() {
    return 'Bam! Bam!'
  }

  turnOn() {
    return 'On'
  }

  turnOff() {
    return 'Off'
  }

  speedUp() {
    return 'Increasing speed...'
  }

  speedDown() {
    return 'Decreasing speed...'
  }

  stop() {
    return 'Stopping'
  }

  turn(direction: string) {
    return `Turning ${direction}`
  }
} 