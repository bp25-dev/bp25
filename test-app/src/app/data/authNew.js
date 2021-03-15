import {signup, login } from './LoginActions.js';
import { useMutation, gql } from '@apollo/client';
import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK } from 'react-admin';
 
  export default (type, params) => {

    if (type === AUTH_LOGIN) {
        const { username, password } = params;
        return graphql.request(login, { username, password }).then(data => {
            const token = data.login.token;
            localStorage.setItem('token', token);
        });
    }
    if (type === AUTH_LOGOUT) {
        localStorage.removeItem('token');
        return Promise.resolve();
    }
    if (type === AUTH_ERROR) {
        const graphqlauth = new GraphQLClient(process.env.REACT_APP_DATA_PROVIDER, {
            headers: {
                authorization: 'Bearer ' +  localStorage.getItem('token'),
            },
        })
        return graphqlauth.request(signup).then(data => { return (data.me.username) ? Promise.resolve() : Promise.reject(); }).catch(e => {
            localStorage.removeItem('token');
        });

    }
    if (type === AUTH_CHECK) {
        return localStorage.getItem('token') ? Promise.resolve() : Promise.reject();
    }
    return Promise.resolve();
};
