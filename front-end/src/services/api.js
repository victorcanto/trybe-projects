import axios from 'axios';

const URL_API = 'http://localhost:3001/login';

const requestLogin = async ({ email, password }) => {
  console.log(email, password);
  try {
    const response = await axios.post(URL_API, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export default requestLogin;
