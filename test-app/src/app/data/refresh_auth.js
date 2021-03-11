import decodeJwt from 'jwt-decode';
import {AUTH} from './testQueries.js';

// TODO: use auth mutation for login 
/* const [login] = useMutation(AUTH, {
    variables: {
      username: formState.username,
      password: formState.password
    },
    onCompleted: ({ login }) => {
      localStorage.setItem('token', login.accessToken);
      history.push('/');
    }
  }); */

export default {
    login: ({ username, password }) => {
        const request = new Request('http://127.0.0.1:5000/auth', {
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
            .then(({ token }) => {
                const decodedToken = decodeJwt(token);
                localStorage.setItem('token', token);
                localStorage.setItem('permissions', decodedToken.permissions);
            });
    },
    checkError: (error) => { /* ... */ },
    checkAuth: () => {
        return localStorage.getItem('token') ? Promise.resolve() : Promise.reject();
    },
    logout: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('permissions');
        return Promise.resolve();
    },
    getIdentity: () => { /* ... */ },
    getPermissions: () => {
        const role = localStorage.getItem('permissions');
        return role ? Promise.resolve(role) : Promise.reject();
    }
};