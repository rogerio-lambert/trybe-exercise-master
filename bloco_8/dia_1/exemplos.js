const wakeUp = () => console.log('Acordando!');

// Ao chamar a função doingThings:
const doingThings = (action) => action();

doingThings(wakeUp);

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
//Acordando!!