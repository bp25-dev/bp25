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
// custom queryBuilder
import { customBuildQuery } from './customQueryBuilder.js';
import { GraphQLClient, gql } from 'graphql-request'

// imports for setting up additional rest provider
//import { RestLink } from 'apollo-link-rest';
//import simpleRestProvider from 'ra-data-simple-rest';


const API_ENDPOINT = 'http://127.0.0.1:5000/web/';
const token = localStorage.getItem('token');

// create a new GraphQl Client 
const gqlClient = new GraphQLClient(API_ENDPOINT, {
  headers: {
    authorization: token ? `Bearer ${token}` : '',
  },
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
  buildQuery: customBuildQuery,
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
