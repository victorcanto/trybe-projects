const createStudent = (name) => {
  return {
    name: name,
    feedback: () => {
      return 'Eita pessoa boa!'
    },
  };
};

module.exports = createStudent;
