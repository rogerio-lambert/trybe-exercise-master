const fatorial  = num => {
  let result = num;
  let operator = num -1;
  while (operator >= 2) {
    result *= operator;
    operator -= 1;
  }
  return result;
}

console.log(fatorial(4));

const maiorPalavra = frase => {
  let arrayPalavras = frase.split(' ');
  let greatestWord = arrayPalavras[0]
  for (let index = 1; index < arrayPalavras.length; index +=1) {
    if (greatestWord.length < arrayPalavras[index].length) {
        greatestWord = arrayPalavras[index];
    }
  }
  return greatestWord;
}

console.log(maiorPalavra('Antônio foi no banheiro e não sabemosftentens o que aconteceu'));