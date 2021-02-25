// exercicio 1 do conteudo
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];
//exercicio 2 do conteudo
console.log(menuServices);

menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu.indexOf('Portfólio');
//exercicio 3 do conteudo
console.log(indexOfPortfolio);

menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu.push('Contato');

console.log(menu);

let groceryList = ["Arroz", "Feijão", "Alface", "Melancia"];

for (let i = 0; i< groceryList.length; i++) {
    console.log(groceryList[i]);
}

// exercicios do modulo de exercicios

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//1
for (let i = 0; i< numbers.length; i++) {
    console.log(numbers[i]);
}

//2

let soma = null;
for (let i = 0; i< numbers.length; i++) {
    soma += numbers[i];
}
console.log('a soma dos números do arrai é: ' + soma);

//3

let media =  soma / numbers.length;
console.log('A média aritmética dos valores do arrai é: ' + media);

// 4

if (media < 20) {
    console.log('Valor da média é maior que 20');
} else {
    console.log('O valor da média é maior ou igual a 20');
}

//5

let maiorValor = numbers[0];
for (let i = 1; i< numbers.length; i++) {
    if (maiorValor<numbers[i]){
        maiorValor = numbers[i];
    };
}
console.log('O maior valor do array é: ' + maiorValor);

//6

let impares = 0;
for (let i = 0; i< numbers.length; i++) {
    if (numbers[i]%2 != 0) {
        impares++;
    }
}
if (impares >0) {
    console.log('O número de números ímpares do arrai é: ' + impares)
} else {
    console.log("nenhum número impar encontrado");
}

//7

let menorValor = numbers[0];
for (let i = 1; i< numbers.length; i++) {
    if (menorValor>numbers[i]){
        menorValor = numbers[i];
    };
}
console.log('O menor valor do array é: ' + menorValor);

//8

let sequencia = new Array();
for(let i = 1; i <= 25; i++){
    sequencia.push(i);
}
console.log(sequencia);

//9

for (let i = 0; i < sequencia.length; i++){
    console.log(sequencia[i]/2);
}

// exercicios bonus
//1

for (let i = 1; i < numbers.length; i++) {
    for (let j = 0; j < i; j++) {
      if (numbers[i] < numbers[j]) {
        let position = numbers[i];
  
        numbers[i] = numbers[j];
        numbers[j] = position;
      }
    }
}
console.log(numbers);

//2

for (let i = 1; i < numbers.length; i++) {
    for (let j = 0; j < i; j++) {
      if (numbers[i] > numbers[j]) {
        let position = numbers[i];
  
        numbers[i] = numbers[j];
        numbers[j] = position;
      }
    }
}
console.log(numbers);

//3

numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
let multNumbers = new Array();
for (let i = 0; i < numbers.length; i++) {
    if(i<numbers.length-1){
        multNumbers[i]= numbers[i] * numbers[i+1];
    } else {
        multNumbers[i]= numbers[i] * 2;
    }
}
console.log(multNumbers);

console.log(Math.ceil(Math.random()*60));
