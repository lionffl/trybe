import { NaturalPerson, LegalPerson } from "./Person";

const felipe = new NaturalPerson('cpf', 'felipe', 'rua bla');

const geolinks = new LegalPerson('cnpj', 'geolinks', 'rua bla2');

console.log(felipe);

console.log(geolinks);