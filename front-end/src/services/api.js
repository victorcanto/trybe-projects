import axios from 'axios';

const URL_API = 'http://localhost:3001';

const requestLogin = async ({ email, password }) => {
  try {
    const response = await axios.post(`${URL_API}/login`, {
      email,
      password,
    });

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

const requestRegisterUser = async ({ name, email, password }) => {
  try {
    const response = await axios.post(`${URL_API}/user`, {
      name,
      email,
      password,
    });

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

const requestGetAllProducts = async () => {
  try {
    const response = await axios.get(`${URL_API}/products`);

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

const requestUserInfo = async (token) => {
  try {
    const response = await axios
      .get(`${URL_API}/user`, { headers: { Authorization: token } });

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export { requestLogin, requestRegisterUser, requestGetAllProducts, requestUserInfo };
