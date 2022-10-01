"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.circle = exports.trapezoid = exports.losange = exports.rectangle = exports.square = exports.triangle = exports.sumArray = exports.add = exports.personAge = exports.greeter = void 0;
function greeter(name) {
    return `Olá ${name}!`;
}
exports.greeter = greeter;
function personAge(name, age) {
    return `${name} tem ${age} anos!`;
}
exports.personAge = personAge;
function add(x, y) {
    return x + y;
}
exports.add = add;
function sumArray(numbers) {
    return numbers.reduce(add, 0);
}
exports.sumArray = sumArray;
function triangle(base, height) {
    return (base * height) / 2;
}
exports.triangle = triangle;
function square(side) {
    return side ** 2;
}
exports.square = square;
function rectangle(base, height) {
    return base * height;
}
exports.rectangle = rectangle;
function losange(diagonal1, diagonal2) {
    return (diagonal1 * diagonal2) / 2;
}
exports.losange = losange;
function trapezoid(base1, base2, height) {
    return ((base1 + base2) * height) / 2;
}
exports.trapezoid = trapezoid;
function circle(radius) {
    const pi = 3.14;
    return radius ** 2 * pi;
}
exports.circle = circle;
