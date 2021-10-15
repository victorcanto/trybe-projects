const { UserService } = require('../services');

const createUser = async (req, res, next) => {
  try {
    const { displayName, email, password, image = 'null' } = req.body;
    const token = await UserService.createUser({
      displayName,
      email,
      password,
      image,
    });
    return res.status(201).json({ token });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const listUsers = async (_req, res) => {
  const users = await UserService.findAllUsers();
  res.status(200).json(users);
};

const listUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await UserService.findUserById(id);
    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const deleteMe = async (req, res, next) => {
  try {
    const { id } = req.user;
    await UserService.deleteMe(id);
    res.status(204).json();
  } catch (err) {
    console.error(err);
    next(err);
  }
};

module.exports = {
  createUser,
  listUsers,
  listUserById,
  deleteMe,
};
