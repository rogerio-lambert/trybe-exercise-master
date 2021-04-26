const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};

describe('Teste exercicio 1 dia 10.2', () =>{
  it('testa se a função uppercase, que usa uma callback transforma uma string para maiusculas', (done) => {
    expect.assertions(1);
    uppercase
    expect(uppercase('test', console.log()))
  });
});