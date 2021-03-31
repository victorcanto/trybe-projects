/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const assert = require("assert");
const productDetails = require("../src/productDetails");

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe("#productDetails", () => {
  const p1 = productDetails()[0].name;
  const p2 = productDetails()[1].name;
  it("tests the function has the correct behaviour", () => {
    assert.strictEqual(typeof productDetails(), 'object');
    assert.strictEqual(productDetails().length, 2);
    assert.strictEqual(typeof productDetails()[0] === 'object' && typeof productDetails()[1] === 'object', true);
    assert.strictEqual(productDetails()[0] !== productDetails()[1], true);
    assert.strictEqual(productDetails(p1, p2)[0].details.productId === `${p1}123`  && productDetails()[1].details.productId === `${p2}123`, true);
  });
});
