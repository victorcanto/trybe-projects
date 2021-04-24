// const assert = require('assert');
const answerPhone = require('../src/asyncJest');

describe('o retorno do telefonema', () => {
  // source: https://jestjs.io/pt-BR/docs/asynchronous
  test('atende', async () => expect(answerPhone(true)).resolves.toBe('Oi!'));
  test('ocupado', async () =>
    expect(answerPhone(false)).rejects.toThrow(
      'Infelizmente não podemos atender...',
    ));
});
