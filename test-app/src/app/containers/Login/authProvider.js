/**
import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK } from 'react-admin';

export default (type, params) => {
    // called when the user attempts to log in
    if (type === AUTH_LOGIN) {
        const { username, password } = params;
        if (username === 'login' && password === 'password') {
        localStorage.setItem('username', username);
        // accept all username/password combinations
        return Promise.resolve();
        }
    }
    // called when the user clicks on the logout button
    if (type === AUTH_LOGOUT) {
        localStorage.removeItem('username');
        return Promise.resolve();
    }
    // called when the API returns an error
    if (type === AUTH_ERROR) {
        const { status } = params;
        if (status === 401 || status === 403) {
            localStorage.removeItem('username');
            return Promise.reject();
        }
        return Promise.resolve();
    }
    // called when the user navigates to a new location
    if (type === AUTH_CHECK) {
        return localStorage.getItem('username')
            ? Promise.resolve()
            : Promise.reject();
    }
    return Promise.reject('Unknown method');
};
*/

export default {
    login: ({ username, password }) => {
        if (username === 'admin' && password === 'password') {
            localStorage.removeItem('not_authenticated');
            localStorage.setItem('role', 'admin');
            localStorage.setItem('login', username);
            localStorage.setItem('user', username);
            return Promise.resolve();
        }
        if (username === 'user' && password === 'password') {
            localStorage.setItem('role', 'user');
            localStorage.removeItem('not_authenticated');
            localStorage.setItem('login', username);
            localStorage.setItem('user', username);
            return Promise.resolve();
        }
        if (username === 'Simone' && password === 'password') {
            localStorage.setItem('role', 'admin');
            localStorage.removeItem('not_authenticated');
            localStorage.setItem('login', username);
            localStorage.setItem('user', username);
            return Promise.resolve();
        }
        localStorage.setItem('not_authenticated', true);
        return Promise.reject();
    },
    logout: () => {
        localStorage.setItem('not_authenticated', true);
        localStorage.removeItem('role');
        localStorage.removeItem('login');
        localStorage.removeItem('user');
        return Promise.resolve();
    },
    checkError: ({ status }) => {
        return status === 401 || status === 403
            ? Promise.reject()
            : Promise.resolve();
    },
    checkAuth: () => {
        return localStorage.getItem('not_authenticated')
            ? Promise.reject()
            : Promise.resolve();
    },
    getPermissions: () => {
        const role = localStorage.getItem('role');
        return Promise.resolve(role);
    },
    getIdentity: () => {
        return {
            id: localStorage.getItem('login'),
            fullName: localStorage.getItem('user'),
        };
    },
};

