// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = new Promise((resolve, reject) => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  const joke = fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => document.getElementById('jokeContainer').innerText = data.joke);
  
  const numbers = [];
  for (let index = 0; index < 10; index += 1) {
    const number = Math.ceil(Math.random()*50) ** 2;
    numbers.push(number);      
  }
  const result = numbers.reduce((soma, num) => soma + num);
  console.log(numbers, result);
  if (result > 8000) {
    return reject(result);
  }
  resolve(result);
})
.then((number) => console.log(`Promise resolvida ${number}`))
.catch((number) => console.log(`Promise rejeitada ${number}`))

window.onload = () => fetchJoke;
