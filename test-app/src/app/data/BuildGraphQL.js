import buildGraphQLProvider from 'ra-data-graphql-simple';
import { setContext } from '@apollo/client/link/context';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { RestLink } from 'apollo-link-rest';
import simpleRestProvider from 'ra-data-simple-rest'

// documentation: https://www.howtographql.com/react-apollo/5-authentication/ 
// TODO: set auth token in login 

const API_ENDPOINT = 'http://127.0.0.1:5000/web';
const httpLink = new HttpLink({ uri: API_ENDPOINT });

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('token');
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      }
    }
  });

export const gqlClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  });

export const gqlDataProvider = buildGraphQLProvider({
    client: gqlClient
  });

// setup for using multiple providers 
/* export const restClient = new ApolloClient({
    link: new RestLink({ uri: LOCAL_REST_ENDPOINT }),
    cache: new InMemoryCache()
  });
 */

/*   const LOCAL_REST_ENDPOINT = 'http://127.0.0.1:5000/file';
  export const RestProvider = simpleRestProvider(LOCAL_REST_ENDPOINT); */