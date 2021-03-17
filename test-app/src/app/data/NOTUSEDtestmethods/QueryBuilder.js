import { fetchUtils } from 'react-admin';
import { stringify } from 'query-string';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';


const API_ENDPOINT = 'http://127.0.0.1:5000/web/';
const httpLink = new HttpLink({ uri: API_ENDPOINT });

const token = localStorage.getItem('token');
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

// try query building scheme git getList instead of checking if === GET_LIST 
export default {
    getList: (resource, params) => {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        const query = {
            sort: JSON.stringify([field, order]),
            range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
            filter: JSON.stringify(params.filter),
        };
        const url = `${API_ENDPOINT}/${resource}?${stringify(query)}`;

        return apolloClient(url).then(({ headers, json }) => ({
            data: json,
            total: parseInt(headers.get('content-range').split('/').pop(), 10),
        }));
    },

    getOne: (resource, params) =>
    apolloClient(`${API_ENDPOINT}/${resource}/${params.id}`).then(({ json }) => ({
            data: json,
        })),

    getMany: (resource, params) => {
        const query = {
            filter: JSON.stringify({ id: params.ids }),
        };
        const url = `${API_ENDPOINT}/${resource}?${stringify(query)}`;
        return apolloClient(url).then(({ json }) => ({ data: json }));
    },
}