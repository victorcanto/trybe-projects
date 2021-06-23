const adventure = require('../src/setupTeardown');

describe('quem sobreviveu?', () => {
  // source: https://jestjs.io/pt-BR/docs/setup-teardown#repetindo-a-configura%C3%A7%C3%A3o-para-v%C3%A1rios-testes
  beforeEach(() => adventure.randomAttack());

  test('depois da primeira aventura', () => {
    expect(adventure.specialists.length).toBe(5);
  });
  test('depois da segunda aventura', () => {
    expect(adventure.specialists.length).toBe(4);
  });
  test('depois da terceira aventura', () => {
    expect(adventure.specialists.length).toBe(3);
  });
  test('depois da quarta aventura', () => {
    expect(adventure.specialists.length).toBe(2);
  });
  test('depois da quinta aventura', () => {
    expect(adventure.specialists.length).toBe(1);
  });
});
