import axios from 'axios';

const base_url = `${process.env.REACT_APP_BASE_URL}/api`;

export const register = (user, history) => {
  axios.post(`${base_url}/account/register`, user)
    .then(res => {
      alert(res.data.message);
      history.push('/login')
    })
    .catch((err) => {
      console.log(err);
      alert(err.response.data.message);
    });
}

export const login = (auth, history) => {
  axios.post(`${base_url}/auth/login`, auth)
    .then(res => {
      localStorage.setItem('token', res.data.token);
			localStorage.setItem('user', JSON.stringify(res.data.user));
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

export const getSocialNetworks = () => {
  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user'));

  return axios.get(`${base_url}/dashboard/socialnetworks`, {
    headers: {
      'x-access-token': token,
      'id': user._id
    }
  })
}