
const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  const letters = names.join('').toLowerCase().split('');
  return letters.reduce(((count, letter) => letter === 'a' ? count + 1 : count), 0);
}

assert.deepStrictEqual(containsA(), 20);