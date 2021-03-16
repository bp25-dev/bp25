// Import modules
import pluralize from 'pluralize';
//import buildGraphQLProvider from 'ra-data-graphql-simple';
import buildGraphQLProvider from 'ra-data-graphql';
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
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { customBuildQuery, customBuildQuery2, testQuery } from './customQueryBuilder.js';


const API_ENDPOINT = 'http://127.0.0.1:5000/web/';
const httpLink = new HttpLink({ uri: API_ENDPOINT });

 //const token = localStorage.getItem('token');
const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXBlIjoiYWNjZXNzIiwiaWF0IjoxNjE1ODgzMTU0LCJuYmYiOjE2MTU4ODMxNTQsImp0aSI6IjBhMTNmNGY5LWQwNmMtNGFjZi1iNzg4LTIxZTlmYzg0OTg0ZCIsImlkZW50aXR5IjoicGEiLCJleHAiOjE2MTU4ODQwNTQsInVzZXJfY2xhaW1zIjp7ImFkbWluIjp0cnVlfX0.RGya5Wt2zsHa1Qbam1jQ48hSiN2UhrMbaTD9uzcpAlg';
// initialize Bearer token authentification method 

const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: API_ENDPOINT
  }),
  cache: new InMemoryCache(),
  connectToDevTools: true,
  headers: {
    authorization: token ? `Bearer ${token}` : '',
  },
});

String.prototype.capitalize = function () {
  return this.replace(/^\w/, (c) => c.toUpperCase());
}

export default buildGraphQLProvider({
  client: apolloClient,
  /* introspection: {
    operationNames: {
      [GET_LIST]: (resource) => `all${pluralize(resource.name).capitalize()}`,
      [GET_ONE]: (resource) => `${resource.name}`,
      [GET_MANY]: (resource) => `all${pluralize(resource.name).capitalize()}`,
      [GET_MANY_REFERENCE]: (resource) => `all${pluralize(resource.name).capitalize()}`,
      [CREATE]: (resource) => `create${resource.name.capitalize()}`,
      [UPDATE]: (resource) => `update${resource.name.capitalize()}`,
      [DELETE]: (resource) => `delete${resource.name.capitalize()}`,
    },
    },  */
  //add custom build query scheme
  buildQuery: customBuildQuery,
});;