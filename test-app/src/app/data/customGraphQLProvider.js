import pluralize from 'pluralize';
import buildGraphQLProvider from 'ra-data-graphql-simple';
import {
  GET_LIST,
  GET_ONE,
  GET_MANY,
  GET_MANY_REFERENCE,
  CREATE,
  UPDATE,
  DELETE,
} from 'ra-core';
import { setContext } from '@apollo/client/link/context';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
// custom queryBuilder
import { customBuildQuery } from './customQueryBuilder.js';
// imports for setting up additional rest provider
import { RestLink } from 'apollo-link-rest';
import simpleRestProvider from 'ra-data-simple-rest';

// documentation: https://www.howtographql.com/react-apollo/5-authentication/
// TODO: set auth token in login

const API_ENDPOINT = 'http://127.0.0.1:5000/web';
const httpLink = new HttpLink({ uri: API_ENDPOINT });

// initialize Bearer token authentification method
const authLink = setContext((_, { headers }) => {
  // get created jwt token in local storage
  //const token = localStorage.getItem('token');
  const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXBlIjoiYWNjZXNzIiwiaWF0IjoxNjE1NjM1ODYwLCJuYmYiOjE2MTU2MzU4NjAsImp0aSI6ImE0MzQwZGQ4LTJkZGMtNDQ2OC04NmQ2LWZmNTc4ZWJkNTg4OSIsImlkZW50aXR5IjoicCIsImV4cCI6MTYxNTYzNjc2MCwidXNlcl9jbGFpbXMiOnsiYWRtaW4iOnRydWV9fQ.Vqa4CtVFW5HRpsLmC41Ra77D6TKMGpeHLbpwk61425s';
  return {
    // set Authorization http headers
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

// create a new Apollo Client
const gqlClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default buildGraphQLProvider({
  client: gqlClient,
  // fit the introspection to the existing API naming scheme
  introspection: {
    operationNames: {
      [GET_LIST]: (resource) => `all${pluralize(resource.name).capitalize()}`,
      [GET_ONE]: (resource) => `${resource.name}`,
      [GET_MANY]: (resource) => `all${pluralize(resource.name).capitalize()}`,
      [GET_MANY_REFERENCE]: (resource) =>
        `all${pluralize(resource.name).capitalize()}`,
      [CREATE]: (resource) => `create${resource.name.capitalize()}`,
      [UPDATE]: (resource) => `update${resource.name.capitalize()}`,
      [DELETE]: (resource) => `delete${resource.name.capitalize()}`,
    },
  },
  //add custom build query scheme
  //buildQuery: customBuildQuery,
});

// import { useQuery, gql } from '@apollo/client';
// const { data } = useQuery(FEED_QUERY);

// setup for using multiple providers
/* export const restClient = new ApolloClient({
    link: new RestLink({ uri: LOCAL_REST_ENDPOINT }),
    cache: new InMemoryCache()
  });
 */

/*   const LOCAL_REST_ENDPOINT = 'http://127.0.0.1:5000/file';
  export const RestProvider = simpleRestProvider(LOCAL_REST_ENDPOINT); */
