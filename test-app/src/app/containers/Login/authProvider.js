import { AuthProvider } from 'react-admin';
/**
const authProvider = {
  // authentication
  login: ({ username }) => {
    localStorage.setItem('username', username);
    // accept all username/password combinations
    return Promise.resolve();
},

logout: () => {
  localStorage.removeItem('username');
  return Promise.resolve();
},
checkError: () => Promise.resolve(),
checkAuth: () =>
  localStorage.getItem('username') ? Promise.resolve() : Promise.reject(),
getPermissions: () => Promise.reject('Unknown method'),
};

export default authProvider;
*/
const authProvider = {
  login: ({ username, password }) =>  {
      const request = new Request('https://mydomain.com/authenticate', {
          method: 'POST',
          body: JSON.stringify({ username, password }),
          headers: new Headers({ 'Content-Type': 'application/json' }),
      });
      return fetch(request)
          .then(response => {
              if (response.status < 200 || response.status >= 300) {
                  throw new Error(response.statusText);
              }
              return response.json();
          })
          .then(auth => {
              localStorage.setItem('auth', JSON.stringify(auth));
          })
          .catch(() => {
              throw new Error('Network error')
          });
  },
  // ...
};

export default authProvider;
