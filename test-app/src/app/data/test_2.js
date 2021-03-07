// import { ApolloClient, InMemoryCache, HttpLink, gql } from 'apollo-boost';
import buildGraphQLProvider from 'ra-data-graphql-simple';
import { setContext } from '@apollo/client/link/context';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { RestLink } from 'apollo-link-rest';
import simpleRestProvider from 'ra-data-simple-rest'

const API_ENDPOINT = 'http://127.0.0.1:5000/web';
const LOCAL_REST_ENDPOINT = 'http://127.0.0.1:5000/file';

const httpLink = new HttpLink({ uri: API_ENDPOINT });

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    // const token = localStorage.getItem('token');
    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXBlIjoiYWNjZXNzIiwiaWF0IjoxNjE1MTEyMTU2LCJuYmYiOjE2MTUxMTIxNTYsImp0aSI6IjRhMWEwZDcxLTkyZmYtNDE1Yi05YzliLTM4NjNmZjgzMDUyYyIsImlkZW50aXR5IjoicGEiLCJleHAiOjE2MTUxMTMwNTYsInVzZXJfY2xhaW1zIjp7ImFkbWluIjp0cnVlfX0.FKgjDYVgVs8VsVPfCaGNq5HT5R0v8t58cluxszsw3K4"
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      }
    }
  });

  export const restClient = new ApolloClient({
    link: new RestLink({ uri: LOCAL_REST_ENDPOINT }),
    cache: new InMemoryCache()
  });

export const gqlClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  });

  // part 2: building up data provider 
  export const gqlDataProvider = buildGraphQLProvider({
    client: gqlClient
  });

  export const RestProvider = simpleRestProvider(LOCAL_REST_ENDPOINT);