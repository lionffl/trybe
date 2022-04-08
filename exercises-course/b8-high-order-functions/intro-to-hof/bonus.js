const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDmg = () => {
  const minDmg = 15;
  const maxDmg = dragon.strength;
  const dmg = Math.ceil(Math.random() * maxDmg);

  return dmg < minDmg ? minDmg : dmg;
}

const warriorDmg = () => {
  const minDmg = warrior.strength;
  const maxDmg = warrior.strength * warrior.weaponDmg;
  const dmg = Math.ceil(Math.random() * maxDmg);

  return dmg < minDmg ? minDmg : dmg;
}

const mageDmg = () => {
  const minDmg = mage.intelligence;
  const maxDmg = mage.intelligence * 2;
  const manaTax = 15;
  const dmg = Math.ceil(Math.random() * maxDmg);
  const mageTurn = {
    damage: undefined,
    mana: undefined
  };

  if (mage.mana < manaTax) {
    mageTurn.mana = 0;
    mageTurn.damage = 'Not enough mana.';
  } else {
    mageTurn.mana = manaTax;
    mageTurn.damage = dmg < minDmg ? minDmg : dmg;
  }

  return mageTurn;
}

const gameActions = {
  warriorturn: (callback) => {
    const warriorDmg = callback();
    dragon.healthPoints -= warriorDmg;
    warrior.damage = 0;
    warrior.damage += warriorDmg;
  },
  mageturn: (callback) => {
    const mageTurn = callback();
    dragon.healthPoints -= mageTurn.damage;
    mage.damage = 0;
    mage.damage += mageTurn.damage;
    mage.mana -= mageTurn.mana;
  },
  dragonturn: (callback) => {
    const dragonDmg = callback();
    warrior.healthPoints -= dragonDmg;
    mage.healthPoints -= dragonDmg;
    dragon.damage = 0;
    dragon.damage += dragonDmg;
  },
  runturn: () => { 
    gameActions.warriorturn(warriorDmg);
    gameActions.mageturn(mageDmg);
    gameActions.dragonturn(dragonDmg);
    console.log(battleMembers); 
  }
};

gameActions.runturn();
