// Crie uma classe abstrata Character que tenha os métodos abstratos talk(): void e specialMove(): void.
// Crie a classe concreta MeleeCharacter que estenda Character e sobrescreva os métodos abstratos dessa classe.
// Crie a classe concreta LongRangeCharacter que estenda Character e sobrescreva os métodos abstratos dessa classe.
// Crie uma função que receba como parâmetro character: Character e chame os métodos talk e specialMove para apresentar o personagem.

abstract class Character {
  abstract talk(): void;
  abstract specialMove(): void;
}

class MeleeCharacter extends Character {
  talk(): string {
    return 'Hello from melee character';
  }
  specialMove(): string {
    return 'Doing some melee special move';
  }
}

class LongRangeCharacter extends Character {
  talk(): string {
    return 'Hello from long range character';
  }
  specialMove(): string {
    return 'Doing some long range special move';
  }
}

const melee1 = new MeleeCharacter();
const ranged1 = new LongRangeCharacter();

const helloFromCharacter = (character: Character) => {
  const hello = character.talk();
  const move = character.specialMove();
  console.log(`${hello}. ${move}.`)
};

helloFromCharacter(melee1);
helloFromCharacter(ranged1);