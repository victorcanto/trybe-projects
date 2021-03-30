const calculator = {
  add: (int1, int2) => {
    return int1 + int2;
  },
  mult: (int1, int2) => {
    return int1 * int2;
  },
  div: (int1, int2) => {
    return Math.floor(int1 / int2);
  },
  sub: (int1, int2) => {
    return int1 - int2;
  },
};

module.exports = calculator;
