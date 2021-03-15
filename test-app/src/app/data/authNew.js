import {AUTH} from './testmethods/testQueries.js';
import { useMutation, gql } from '@apollo/client';


const LOGIN = useMutation(AUTH, {
    variables: {
      username: formState.username,
      password: formState.password
    },
    onCompleted: ({ login }) => {
      localStorage.setItem('token', login.accessToken);
      history.push('/');
    }
  }); 

  const ME = `
    query {
        me {
            username
        }
    }
`;
  
  export default (type, params) => {

    if (type === AUTH_LOGIN) {
        const { username, password } = params;
        return graphql.request(LOGIN, { username, password }).then(data => {
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
        return graphqlauth.request(ME).then(data => { return (data.me.username) ? Promise.resolve() : Promise.reject(); }).catch(e => {
            localStorage.removeItem('token');
        });

    }
    if (type === AUTH_CHECK) {
        return localStorage.getItem('token') ? Promise.resolve() : Promise.reject();
    }
    return Promise.resolve();
};
