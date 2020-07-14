import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL;
const token = localStorage.getItem('token');

const tokenInstance = axios.create({
  baseURL,
  headers: { 'x-access-token': token }
});

export const register = (user, history) => {
  axios.post(`${baseURL}/account/register`, user)
    .then(res => {
      alert(res.data.message);
      history.push('/login')
    })
    .catch(err => {
      alert(err.response.data.message);
    });
}

export const login = (auth, history) => {
  axios.post(`${baseURL}/auth/login`, auth)
    .then(res => {
      localStorage.setItem('token', res.data.token);
			history.push('/dashboard');
    })
    .catch(err => {
      alert(err.response.data.message);
    });
};

export const logout = (history) => {
  localStorage.removeItem('token');
  history.push('/');
}

export const getUser = () => {
  return tokenInstance.get('/account/details');
}