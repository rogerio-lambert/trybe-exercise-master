function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

describe('Teste refatorado do exercicio 1 7.3', () => {
  it('teste se a função sum returna erro se passado parâmetro não numerico', () => {
    expect.assertions(2);
    expect(() => {sum(1, '2')}).toThrow();
    expect(() => {sum(1, '2')}).toThrowError(new Error('parameters must be numbers'));
  });
  it('testa funcionalidade de soma da função sum', () => {
    expect(sum(3, 4)).toEqual(7);
  });
});

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

describe('Teste refatorado do exercicio 2 - 7.3', () => {
  it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect.assertions(1);
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect.assertions(1);
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  it('Verifique se o array passado por parâmetro não sofreu alterações', () => {
    expect.assertions(3);
    let arr = [1, 2, 3, 4];
    const result = myRemove(arr, 3)
    expect(result).toEqual([1, 2, 4]);
    expect(arr).not.toBe(result);
    expect(arr).toEqual([1, 2, 3, 4]);
  });
  it('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
    expect.assertions(1);
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});

function myRemoveWithoutCopy(arr, item) {
    for (let index = 0, len = arr.length; index < len; index += 1) {
      if (arr[index] === item) {
        arr.splice(index, 1);
        index -= 1;
        len -= 1;
      }
    }
  
    return arr;
}

describe('Teste refatorado do exercicio 3 - 7.3', () => {
  let arr = [];
  beforeEach(() => {
    arr = [1, 2, 3, 4];
  });
  it('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect.assertions(1);
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  it('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect.assertions(1);
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  it('Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações', () => {
    expect.assertions(2);
    expect(arr).toEqual([1, 2, 3, 4]);
    myRemoveWithoutCopy(arr, 3);
    expect(arr).toEqual([1, 2, 4]);
  });
  it('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado', () => {
    expect.assertions(1);
    myRemoveWithoutCopy(arr, 5);
    expect(arr).toEqual([1, 2, 3, 4]);
  });
});

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}
describe('Teste refatorado do exercicio 4 - 7.3', () => {
  it('Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado', () => {
    expect.assertions(1);
    expect(myFizzBuzz(15)).toEqual('fizzbuzz');
  });
  it('Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado', () => {
    expect.assertions(1);
    expect(myFizzBuzz(6)).toEqual('fizz');
  });
  it('Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado', () => {
    expect.assertions(1);
    expect(myFizzBuzz(10)).toEqual('buzz');
  });
  it('Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado', () => {
    expect.assertions(1);
    expect(myFizzBuzz(8)).toEqual(8);
  });
  it('Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado', () => {
    expect.assertions(1);
    expect(myFizzBuzz('não é número')).toEqual(false);
  });
});


const obj1 = {
    title: 'My Title',
    description: 'My Description',
  };
  
  const obj2 = {
    description: 'My Description',
    title: 'My Title',
  };
  
  const obj3 = {
    title: 'My Different Title',
    description: 'My Description',
  };

describe('Teste refatorado do exercicio 5 - 7.3', () => {
  it('Compare dois objetos (JSON) para verificar se são idênticos ou não', () => {
    expect.assertions(3);
    expect(obj1).toEqual(obj2);
    expect(obj1).not.toEqual(obj3);
    expect(obj2).not.toEqual(obj3);
  });
});