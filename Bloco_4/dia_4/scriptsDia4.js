let a , b, c;
let multi, div, mod;
a = 21;
b = 11;
c = 25;
function som(a, b){
    return a + b;
} 
function sub(a, b){
   return a - b;
}

multi = a * b;
div = a / b;
mod = a % b;
console.log( 'O número a é ' + a);
console.log( 'O número b é ' + b);
console.log( 'O resultado da soma é ' + som(a,b));
console.log( 'O resultado da subtração é ' + sub(a,b));
console.log( 'O resultado da multiplicação é ' + multi);
console.log( 'O resultado da divisão é ' + div);
console.log( 'O resultado do módulo é ' + mod);
//Exercicios de objetos e for in
//1
let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  };
  console.log('Bem-vinda, ' + info.personagem );
  //2
  info['recorrente'] = 'sim';
  console.log(info);
//3
  for (let entradas in info) {
      console.log(entradas);
  }

//4

for (let entradas in info) {
    console.log(info[entradas]);
}

//5

let info2 = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: 'sim'
  };
  for (let properties in info) {
    if (
      info[properties] === info.recorrente &&
      info[properties] === "Sim" &&
      info2[properties] === "Sim"
    ) {
      console.log("Ambos recorrentes");
    } else {
      console.log(info[properties] + " e " + info2[properties]);
    }
  }

;

//Parte 2 funcões
// 1 - função reconhece palindromo

function verificaPalindromo(teste){
    if (teste === teste.split('').reverse().join('')){
        return true;
    } else {
        return false;
    }
}
let palavra  = 'desenvolvimento';

console.log ('A palavra ' + palavra + ' é um palíndromo? ' + verificaPalindromo(palavra));

//2

function maiorNoArray(numeros){
    let maior = numeros[0];
    let indexMaior = 0;
    for (let index in numeros){
        if (numeros[index] > maior){
            maior = numeros[index];
            indexMaior = index;            
        }
    }
    return indexMaior
}

let arrayTeste = [2, 3, 6, 7, 10, 1];

console.log('dado o array ' + arrayTeste + ' o índice o maior número é: ' + maiorNoArray(arrayTeste));

//3
function menorNoArray(numeros){
    let menor = numeros[0];
    let indexMenor = 0;
    for (let index in numeros){
        if (numeros[index] < menor){
            menor = numeros[index];
            indexMenor = index;            
        }
    }
    return indexMenor
}

console.log('dado o array ' + arrayTeste + ' o índice o menor número é: ' + menorNoArray(arrayTeste));

//4

function maiorNome(nomes){
    let maiorString = nomes[0];
    for (let index in nomes){
        if (maiorString.length < nomes[index].length){
            maiorString = nomes[index];
        }
    }
    return maiorString;    
}

let arrayNomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; 

console.log('Dado o array de nomes ' + arrayNomes + ' o nome de maior quantidade de caracteres é ' + maiorNome(arrayNomes));

//5

function repeteMais(numeros){
    let maisRepete = numeros[0];
    let repetDesteNumero = 0;    
    for (let index1 in numeros){
        let nRepeticoes = 0;
        for (let index2 in numeros){
            if(numeros[index1] === numeros[index2] && index1 !== index2){
                nRepeticoes += 1;
            }            
        }
       if (nRepeticoes > repetDesteNumero){
           maisRepete = numeros[index1];
           repetDesteNumero = nRepeticoes;
       }
    }
    return maisRepete;
}

let arrayTesteRepeticao = [5, 2, 3, 2, 5, 8, 2, 3];
console.log('Dado o array de números: ' +arrayTesteRepeticao + ' o número que mais se repete é o número: ' + repeteMais(arrayTesteRepeticao));

//6

function somaSequencia (num){
    let somaDaSequencia = 0;
    for (let index = 1 ; index <= num; index++){
        somaDaSequencia += index;
    }
    return somaDaSequencia;
}
let numTeste = 10;
console.log('Dado o número ' + numTeste + ', a soma sequencial desde o 1 dá: ' + somaSequencia(numTeste));

//7

function verificaFimPalavra(word, ending){
    let arrayWord = word.split('').reverse();
    let arrayEnding = ending.split('').reverse();
    let verify = true;
    for (let index in arrayEnding){
        if (arrayWord[index] !== arrayEnding[index]){
            verify = false;
            break;
        }
    }
    return verify;
}

console.log('Dada a palavra "ratoeira" e o final "eira", este final pertence à palavra? ' + verificaFimPalavra('ratoeira','eira'));

console.log('Dada a palavra "ratoeira" e o final "fato", este final pertence à palavra? ' + verificaFimPalavra('ratoeira','fato'));

//Bonus desafio
//converte algarismos romanos

function valorLetra(algRomano){
 //   algRomano = algRomano.toUpperCase;   
    switch (algRomano){
        case 'I':
            return 1;
            break;
        case 'V':
            return 5;
            break;
        case 'X':
            return 10;
            break;
        case 'L':
            return 50;
            break;
        case 'C':
            return 100;
            break; 
        case 'D':
            return 500;
            break;
        case 'M':
            return 1000;
            break;
        default:
            return 0;            
    }
}
function converteAlgRomanos(numRomano){
    let arrayRomano = numRomano.split('').reverse();
    let numDecimal = valorLetra(arrayRomano[0]);
    for (let index = 0; index < numRomano.length - 1; index++){
        if (valorLetra(arrayRomano[index + 1]) >= valorLetra(arrayRomano[index])){
            numDecimal += valorLetra(arrayRomano[index + 1]);
        } else {
            numDecimal -= valorLetra(arrayRomano[index + 1]);
        }
    }
    return numDecimal;
}

let algTesteRomano = 'CMXXIV';
console.log('Dado o algarismo romano ' + algTesteRomano + ' o número decimal correspondente é: ' + converteAlgRomanos(algTesteRomano));

// 2

function add(num1, num2) {
    num1 = num1.toString().split('').reverse();
    num2 = num2.toString().split('').reverse();
    let result = [];
    let whoHasMoreDigits = 0;
    let lengthFor = num1.length;
    if (num1.length > num2.length){
      lengthFor = num2.length;
      whoHasMoreDigits = 1;
    } else if(num1.length < num2.length){
      whoHasMoreDigits = 2;
    } 
    
    for (let index = 0; index < lengthFor; index += 1 ){
      let num = parseInt(num1[index]) + parseInt(num2[index]);
      result.unshift(num.toString());
    }
    if(whoHasMoreDigits === 1){
      for (let index = lengthFor; index < num1.length; index += 1){
        result.unshift(num1[index]);
      }
    } else if (whoHasMoreDigits === 2){
      for (let index = lengthFor; index < num2.length; index += 1){
        result.unshift(num2[index]);
      }
    }
    return parseInt(result.join(''));
  }

  console.log('Na logica da Carla Peres 16 + 18 = ' + add(16, 18));