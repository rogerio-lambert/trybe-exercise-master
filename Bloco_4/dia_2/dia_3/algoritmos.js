//1- quadrado de asteriscos
let n = 13;  // número de asteriscos
let linha;
for (let i = 0; i < n; i++) {
    linha = '';
    for(let j = 0; j < n; j++){
        linha = linha + '* ';
    }
    console.log(linha);
}

// 2- triângulo

for (let i = 0; i < n; i++) {
    linha = '';
    for(let j = 0; j < i + 1; j++){
        linha += '* ';
    }
    console.log(linha);
}
//3-triângulo invertido
for (let i = 0; i < n; i++) {
    linha = '';
    for (let k = 0; k < (n-i -1); k++){
        linha +='  ';
    }
    for(let j = 0; j < i + 1; j++){
        linha += '* ';
    }
    console.log(linha);
}

/* 4- Triângulo de base n
Duas condições:
- Para n par: pirâmede terá n/2 linhas e a primeira linha terá dois asteríscos
- Para n impar: pirâmede terá n/2 + 1 linhas e primeira linha terá um asterísco
Obs.: a diferença entre a primeira e a segunda condição é uma linha a mais
ações:
- testa se n é par:
    -sim: inicia i = 1
    -não: inicia i = 0
- para cada linha da pirâmede:
    - preencha espaços n/2-i
    - preencha  asteríscos
    - imprima a linha

*/
let index;
if (n % 2 === 0) {
    index = 1;
} else {
    index = 0;
}
let nlinhas = Math.ceil(n/2);
for (index; index <= nlinhas; index += 1) {
    linha = '';
    for (var k = 0; k < (nlinhas-index); k += 1){
        linha +='  ';
    }
    for(let j = 0; j < n - 2*k; j += 1){
        linha += '* ';
    }
    console.log(linha);
}

//5- pirâmide com miolo vazio

if (n % 2 === 0) {
    index = 1;
} else {
    index = 0;
}
for (index; index <= nlinhas; index += 1) {
    linha = '';
    for (var k = 0; k < (nlinhas-index); k += 1){
        linha +='  ';
    }
    for(let j = 0; j < n - 2*k; j += 1){
        if (j === 0 || j === n - 2*k -1 || index === nlinhas) {
            linha += '* ';
        } else{
            linha +='  ';
        }    
    }
    console.log(linha);
}


//6- verificação se um número é primo

let numAvaliado = 53;
let ehPrimo = true;
for (let index2 = 2; index2 <= numAvaliado/2; index2 += 1) {
    if (numAvaliado % index2 === 0){
        console.log('O número avaliado ' + numAvaliado + ' não é primo, pois é divisível por :' + index2);
        index2 = numAvaliado;
        ehPrimo = false;
    }
}
if (ehPrimo) {
    console.log(' O número avaliado '+ numAvaliado+ ' é primo');
}