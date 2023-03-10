// const { TestScheduler } = require('@jest/core');
const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  test('retorna a quantidade de elefantes', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  test('retorna um array com a relação dos nomes de todos os elefantes', () => {
    const expected = ['Ilana', 'Orval', 'Bea', 'Jefferson'];
    expect(handlerElephants('names')).toEqual(expected);
  });
  test('retorna a média de idade dos elefantes', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
  test('retorna a localização dos elefantes dentro do Zoológico', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  test('retorna a popularidade dos elefantes', () => {
    expect(handlerElephants('popularity')).toEqual(5);
  });
  test('retorna um array com a relação de dias em que é possível visitar os elefantes', () => {
    const expected = ['Friday', 'Saturday', 'Sunday', 'Tuesday'];
    expect(handlerElephants('availability')).toEqual(expected);
  });
  test('retorna undefined caso não seja passado nenhum parametro', () => {
    expect(handlerElephants()).toBe(undefined);
  });
  test('retorna Parametro invalido ao ser passado um objeto vazio como parametro', () => {
    const expected = 'Parâmetro inválido, é necessário uma string';
    expect(handlerElephants({})).toBe(expected);
  });
  test('retorna null ao ser passado uma funcionalidade inexistente', () => {
    const anything = 'qualquer coisa';
    expect(handlerElephants(anything)).toBe(null);
  });
});
