import { ApolloClient, InMemoryCache, HttpLink, gql } from 'apollo-boost';
import buildGraphQLProvider from 'ra-data-graphql-simple';
import { setContext } from '@apollo/client/link/context';

const API_ENDPOINT = 'localhost:5000/web';
const httpLink = new HttpLink({ uri: API_ENDPOINT });

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    // const token = localStorage.getItem('token');
    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXBlIjoiYWNjZXNzIiwiaWF0IjoxNjE1MTA3MTEzLCJuYmYiOjE2MTUxMDcxMTMsImp0aSI6IjU4OWZjODBjLTg2MGYtNGFjYS04MjZmLTQ3ZGNhZDFjMWYyNiIsImlkZW50aXR5IjoidGVzdCIsImV4cCI6MTYxNTEwODAxMywidXNlcl9jbGFpbXMiOnsiYWRtaW4iOnRydWV9fQ.-JaHBXI_woviw2bnooOMTVeYtoHDxZckgmP1NsxWc1s"
    // return the headers to the context so httpLink can read them
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

  // part 2: building up data provider 
  export const gqlDataProvider = buildGraphQLProvider({
    client: gqlClient
  });
