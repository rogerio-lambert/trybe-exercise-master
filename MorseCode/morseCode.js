
// let MORSE_CODE = {
//     .- : 'A',
//     --. : 'G',
//     -- : 'M',
//     ... : 'S',
//     -.-- : 'Y',
//     ....- : '4',
//     -... : 'B',
//     .... : 'H',
//     -. : 'N',
//     - : 'T',
//     --.. : 'Z',
//     ..... : '5',
//     -.-. : 'C',
//     .. : 'I',
//     --- : 'O',
//     ..- : 'U',
//     ----- : '0',
//     -.... : '6',
//     -.. : 'D',
//     .--- : 'J',
//     .--. : 'P',
//     ...- : 'V',
//     .---- : '1',
//     --... : '7',
//     . : 'E',
//     -.- : 'K',
//     --.- : 'Q',
//     .-- : 'W',
//     ..--- : '2',
//     ---.. : '8',
//     ..-. : 'F',
//     .-.. : 'L',
//     .-. : 'R',
//     -..- : 'X',
//     ...-- : '3',
//     ----. : '9'
// }

let code = '123456789';
console.log(code[3]);

/* 
temo as sequites casos de ação:
1- O caractere é um . ou -  : neste caso devo concatenar no string letter para formar uma letra
2- O caractere é um espaço : 
    se o  string letter não está vazia:
         devo buscar no dicionario o sentido  da letra, concatená-la na mensagem, esvaziar a letter
    senão :
        concatenar um espaço na string mensage
        caminhar na string até o próximo caractere diferente de espaço

*/

function decodeMorse(morseCode){
    let letter = '';
    let mensage = '';
    for (let index = 0; index < morseCode.length; index += 1){
        if(morseCode[index] === '.' || morseCode[index] === '-'){
            letter += morseCode[index];
            if(morseCode[index + 1] === ' ' || index + 1 === morseCode.length){
              //  mensage += MORSE_CODE[letter];
                console.log(letter);
                letter = '';
            }
        }else if(morseCode[index] === ' '){
            let conter = 0;
            while(morseCode[(index)] === ' ' && index < morseCode.length){
                index += 1;
                conter += 1;             
            }
            if (conter >= 3 && mensage !== '') {
                mensage += ' ';
            }
            index -= 1;
        }    
    }
    return mensage;
}

console.log(decodeMorse('.... . -.--   .--- ..- -.. .'));