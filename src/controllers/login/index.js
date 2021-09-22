const jwt = require('jsonwebtoken');
const { StatusCode, SECRET } = require('../../constants');

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const getPayload = ({ name, password, ...rest }) => ({ data: rest });

const userService = require('../../services/users');

const fieldsAreEmpty = (email, password) => !email || !password;
const userIsNotValid = (user, password) => !user || user.password !== password;

module.exports = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (fieldsAreEmpty(email, password)) {
      return res
        .status(StatusCode.UNAUTHORIZED)
        .json({ message: 'All fields must be filled' });
    }

    const user = await userService.findUser(email);

    if (userIsNotValid(user, password)) {
      return res
        .status(StatusCode.UNAUTHORIZED)
        .json({ message: 'Incorrect username or password' });
    }

    const token = jwt.sign(getPayload(user), SECRET, jwtConfig);

    res.status(StatusCode.OK).json({ token });
  } catch (error) {
    console.error(error.message);
  }
};
