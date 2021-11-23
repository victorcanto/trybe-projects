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

const requestSales = async (token) => {
  try {
    const response = await axios.get(`${URL_API}/sales`, {
      headers: { authorization: token },
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

const requestSale = async (token, id) => {
  try {
    const response = await axios.get(`${URL_API}/sales/${id}`, {
      headers: { authorization: token },
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
    const response = await axios.get(`${URL_API}/user`, {
      headers: { Authorization: token },
    });

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

const requestUsersByRole = async (token, role) => {
  try {
    const response = await axios.get(`${URL_API}/users/${role}`, {
      headers: { Authorization: token },
    });

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

const requestRegisterSale = async (token, sale, products) => {
  try {
    const response = await axios.post(`${URL_API}/sales`, {
      headers: { Authorization: token },
      data: { sale, products: Object.values(products) },
    });

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export {
  requestLogin,
  requestRegisterUser,
  requestGetAllProducts,
  requestUserInfo,
  requestSale,
  requestSales,
  requestUsersByRole,
  requestRegisterSale,
};
