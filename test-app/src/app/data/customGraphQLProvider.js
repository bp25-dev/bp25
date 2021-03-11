import buildGraphQLProvider from 'ra-data-graphql-simple';
import { setContext } from '@apollo/client/link/context';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
// custom queryBuilder 
import {customBuildQuery} from './customQueryBuilder.js';
// imports for setting up additional rest provider 
import { RestLink } from 'apollo-link-rest';
import simpleRestProvider from 'ra-data-simple-rest'

// documentation: https://www.howtographql.com/react-apollo/5-authentication/ 
// TODO: set auth token in login 

const API_ENDPOINT = 'http://127.0.0.1:5000/web';
const httpLink = new HttpLink({ uri: API_ENDPOINT });

// initialize Bearer token authentification method 
const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('token');
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      }
    }
  });

// create a new Apollo Client 
export const gqlClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  });

export const gqlDataProvider = buildGraphQLProvider({
    client: gqlClient,
    // fit the introspection to the existing API naming scheme 
    introspection: {
      operationNames: {
        [GET_LIST]: resource => `all${pluralize(resource.name).capitalize()}`,
        [GET_ONE]: resource => `${resource.name}`,
        [GET_MANY]: resource => `all${pluralize(resource.name).capitalize()}`,
        [GET_MANY_REFERENCE]: resource => `all${pluralize(resource.name).capitalize()}`,
        [CREATE]: resource => `create${(resource.name).capitalize()}`,
        [UPDATE]: resource => `update${(resource.name).capitalize()}`,
        [DELETE]: resource => `delete${(resource.name).capitalize()}`,
      },
      buildQuery: customBuildQuery 
    }
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