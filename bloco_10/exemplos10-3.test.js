const mat = require('./math');
jest.mock("./mat");

test("#somar", () => {
  // Aqui testamos se função foi chamada, quantas vezes foi chamada, quais parâmetros foram usados e qual seu retorno

  mat.somar.mockImplementation((a, b) => a + b);
  mat.somar(1, 2);

  expect(mat.somar).toHaveBeenCalled();
  expect(mat.somar).toHaveBeenCalledTimes(1);
  expect(mat.somar).toHaveBeenCalledWith(1, 2);
  expect(mat.somar(1, 2)).toBe(3);
});