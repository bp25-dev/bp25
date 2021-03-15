// Import modules
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

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
