import {signup, login } from './NOTUSEDtestmethods/LoginActions.js';
import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK } from 'react-admin';
import { GraphQLClient } from 'graphql-request';
import { gql, useMutation } from '@apollo/client';
import graphql from './ApolloGraphQLProvider.js';


//accessing existing mutations for logging in and create admin account
const SIGNUP_MUTATION = gql`
    mutation signup(
        $username: String!
        $password: String!
    ) {
    createAdmin(
       username: $username
       password: $password
    )
    {
      user
      {
        username 
      }
    }
  }`;

const LOGIN_MUTATION = gql`
  mutation login(
    $username: String!
    $password: String!
  ) {
    auth(
        username: $username
        password: $password)
    {
      accessToken
    }
  }`;
 
// use the existing mutations to set the token in the local storage 
  export default (type, params) => {

    if (type === AUTH_LOGIN) {
        const { username, password } = params;
        return graphql.request(LOGIN_MUTATION, { username, password }).then(data => {
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
        return graphqlauth.request(SIGNUP_MUTATION).then(data => { return (data.me.username) ? Promise.resolve() : Promise.reject(); }).catch(e => {
            localStorage.removeItem('token');
        });

    }
    if (type === AUTH_CHECK) {
        return localStorage.getItem('token') ? Promise.resolve() : Promise.reject();
    }
    return Promise.resolve();
};
