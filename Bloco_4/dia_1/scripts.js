let a , b, c;
let soma, sub, multi, div, mod;
a = 21;
b = 11;
c = 25;
soma = a + b;
sub = a - b;
multi = a * b;
div = a / b;
mod = a % b;
console.log( 'O número a é ' + a);
console.log( 'O número b é ' + b);
console.log( 'O resultado da soma é ' + soma);
console.log( 'O resultado da subtração é ' + sub);
console.log( 'O resultado da multiplicação é ' + multi);
console.log( 'O resultado da divisão é ' + div);
console.log( 'O resultado do módulo é ' + mod);

//programa que determina o maior de dois números
console.log('Dados dos números a = ' + a + ' e o número b = ' + b);
if (a > b){
    console.log('O número a é maior que o número b');
} else if (a === b) {
    console.log('O número a é igual ao número b');
} else {
    console.log('O número b é maior que o número a');
}

//programa que determina o maior de tres números

console.log('Dados os números a = ' + a + ', o número b = ' + b + ' e o número c = ' + c);
if ((a => b) && (a => c)){
    if(a == b) {
        console.log('O número a é igual ao número b e maior que o número c');
    } else if(a == c) {
        console.log('O número a é igual ao número c e maior que o número b');
    } else if ((a == b) && (b == c)) {
        console.log('Os números a, b e c são iguais');
    } else {
        console.log('O número a é maior que os números b e c');
    } 
} else if ((b => a) && (b => c)) {
    if(b == c) {
        console.log('O número b é igual ao número c e maior que o número b');
    }else {
        console.log('O número b é maior que os números a e c');
    }
    
} else {
    console.log('O número c é maior que os números a e b');
}

// programa que avalia se valores de variáveis podem formar ângulos internos de um triângulo

console.log('Dados os valores de ângulos internos a = ' + a + ', b = ' + b + ' e c = ' + c);
let teste = (a + b + c) == 180;
console.log(teste);
if (teste) {
    console.log('Este ângulos formam um triângulo');
} else{
    console.log('Este ângulos não formam um triângulo');
}

//Programa que retorna positive se o valor da variável form maior positivo e negative se for negativo

let num = 5;
console.log ('O número avaliado ' + num + ' é :');
if (num > 0) {
    console.log('positive');
} else if (num < 0) {
    console.log('negative');
} else {
    console.log('zero');
}

let peca = 'Bispo';
teste = peca.toLowerCase();
console.log(teste);
switch (teste) {
    case 'rainha':
        console.log('A rainha pode se mover em qualquer direção, em linhas e diagonais em qualquer distância');
        break;
    case 'rei':
        console.log('O rei pode se mover em qualquer direção, em linha e diagonais apenas uma casa');
        break;
    case 'bispo':
        console.log('O bispo pode se mover em qualquer direção, nas diagoanais e a qualquer distância');
        break;
    case 'torre':
        console.log('A torre pode se mover em qualquer direção, em linhas e a qualquer distância');
        break;
    case 'cavalo':
        console.log('O cavalo move duas casas para frente e uma para o lado, em qualquer direção e pode pular peças');
        break;
    case 'peão':
        console.log('O peão pode se mover uma casa para frente (o primeiro movimento pode ser duas casas) e captura peças nas diagonais à frente');
        break;
    default:
        console.log('Nome de peça inválido');
}
 // Programa que converte nota em conceito

 let nota = 85;
 let conceito;
 teste = true;
 console.log('A nota testada é '+ nota )
 if ((nota >=0) && (nota < 50)) {
    conceito = 'F';
 } else if ((nota >=50) && (nota < 60)){
    conceito = 'E';
 } else if ((nota >=60) && (nota < 70)){
    conceito = 'D';
 } else if ((nota >=70) && (nota < 80)){
    conceito = 'C';
 } else if ((nota >=80) && (nota < 90)){
    conceito = 'B';
 } else if ((nota >=90) && (nota <= 100)){
    conceito = 'A';
 } else {
    console.log('Nota introduzida é inválida');
    teste = false;
 }
 if (teste){
    console.log('O conceito para esta nota é ' + conceito);
 }
 
// Programa que testa dentre três números se um deles é par

console.log('os números testados são ' + a +'. ' + b + ' e ' + c + '. Algum destes três números é par?');
console.log(((a%2 == 0)|| (b%2 == 0) || (c%2 == 0)));

// Programa que testa dentre três números se um deles é impar

console.log('os números testados são ' + a +'. ' + b + ' e ' + c + '. Algum destes três números é impar?');
console.log(((a%2 != 0)|| (b%2 != 0) || (c%2 != 0)));

// programa que calcula o valor do lucro sob a venda de mil unidades de um produto

let custoBase, lucro, valorVenda;
custoBase = 20;
valorVenda = 30;
console.log('O custo unitário sem imposto é R$ ' + custoBase + ',00  a alicota de imposto é 20% sob o custo e o preço de venda é R$ ' + valorVenda + ',00')
if (valorVenda * custoBase >= 0){
    lucro = (valorVenda - custoBase * 1.2) * 1000;
    console.log('O lucro total que a empresa vai ter com a venda de 1000 unidades do produto é R$ ' + lucro + ',00');
} else {
    console.log('Erro devido a inserção de valores negativos');
}

// programa para calcular o valor do líquido de salário

let salario, descontoINSS, descontoIR, salarioLiquido;
salario = 3500;
if (salario <= 1556.94) {
    descontoINSS = salario * 0.08;
} else if (salario <= 2594.92){
    descontoINSS =  salario * 0.09;
} else if (salario <= 5189.82){
    descontoINSS =  salario * 0.11;
} else {
    descontoINSS = 570.88;
}

if (salario <= 1903.98) {
    descontoIR = 0;
} else if (salario <= 2826.65){
    descontoIR =  salario * 0.075 - 142.80;
} else if (salario <= 3751.05){
    descontoIR =  salario * 0.15 - 354.8;
} else if (salario <= 4664.68){
    descontoIR =  salario * 0.225 - 636,13;
} else {
    descontoIR = salario * 0.275 - 869.36;
}
salarioLiquido = salario - descontoINSS - descontoIR;

console.log('Para um valor bruto de salário de R$ ' + salario + ' o desconto do INSS é R$ ' + descontoINSS + ' , o desconto do IR é R$ ' + descontoIR + ' e o valor líquido a receber é R$ ' + salarioLiquido);