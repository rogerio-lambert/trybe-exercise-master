

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

const calcDamage = (min, max) => min + Math.round((max - min) * Math.random());
const warriorDamage = () => {
  warrior.damage = calcDamage(warrior.strength, warrior.weaponDmg * warrior.strength);
}
const mageDamage = () => {
  if (mage.mana >= 15) {
    mage.damage = calcDamage(mage.intelligence, mage.intelligence * 2);
    mage.mana -= 15;
  } else {
    mage.damage = 0;
    console.log('mago não possue mana suficiente');
  }
}
const drangonDamage = () => {
  dragon.damage = calcDamage(15, dragon.strength);
}

const damage =  (player, points) => player.healthPoints -= points; 
  
const battleMembers = { mage, warrior, dragon };
drangonDamage(dragon);
mageDamage(mage);
console.log(dragon.damage, mage.damage, mage.mana);

const gameActions = {
  warriorTurn: (warriorDamage) => {
    warriorDamage();
    damage(dragon, warrior.damage);
  }  
    // Crie as HOFs neste objeto.
};