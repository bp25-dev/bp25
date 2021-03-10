import buildGraphQLProvider from 'ra-data-graphql-simple';
import buildApolloClient, {
    buildQuery as buildQueryFactory,
} from 'ra-data-graphql-simple';
import { DELETE, GET_LIST, GET_MANY, GET_ONE } from 'ra-core';
import gql from 'graphql-tag';
import simpleRestProvider from 'ra-data-simple-rest';

const apiUrl = 'http://127.0.0.1:5000/web';

/* const restProvider = simpleRestProvider(apiUrl);

const delayedDataProvider = new Proxy(restProvider, {
    get: (target, name, self) =>
        name === 'then' // as we await for the dataProvider, JS calls then on it. We must trap that call or else the dataProvider will be called with the then method
            ? self
            : (resource, params) =>
                  new Promise(resolve =>
                      setTimeout(
                          () => resolve(restProvider[name](resource, params)),
                          500
                      )
                  ),
}); 

const getGqlResource = resource => {
    switch (resource) {
        case 'object':
            return 'Exponate';
        case 'tour':
            return 'Touren';
        case 'user':
            return 'Benutzer'; 
        default:
            throw new Error(`Unknown resource ${resource}`);
    }
};

*/
const customBuildQuery = introspectionResults => {
    const buildQuery = buildQueryFactory(introspectionResults);

    return (type, resource, params) => {
        if (type === GET_ONE) {
            return {
                query: gql`query ${resource}{
                    ${resource}(token: $token)
                }`,
                variables: {token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXBlIjoiYWNjZXNzIiwiaWF0IjoxNjE1MzY3NzA4LCJuYmYiOjE2MTUzNjc3MDgsImp0aSI6IjMzODMyMjgxLTgyZDctNDNiNS1iYjgwLWQxZDNiNDM1ODAzMiIsImlkZW50aXR5IjoicGEiLCJleHAiOjE2MTUzNjg2MDgsInVzZXJfY2xhaW1zIjp7ImFkbWluIjp0cnVlfX0.Dta-ZFl1uwevtBSiec9sJ9fkRBUHdtqFC_lnsdDGmvI"},
                parseResponse: ({data}) => {
                    if (data[`${resource}`]) {
                        return {data: {id: params.objectID}};
                    }

                    throw new Error(`Could not find ${resource}`);
                },
            };
        }
        if (type === GET_LIST) {
            return {
                query: gql`query ${resource}{
                    ${resource}(token: $token)
                }`,
                variables: {token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXBlIjoiYWNjZXNzIiwiaWF0IjoxNjE1MzY3NzA4LCJuYmYiOjE2MTUzNjc3MDgsImp0aSI6IjMzODMyMjgxLTgyZDctNDNiNS1iYjgwLWQxZDNiNDM1ODAzMiIsImlkZW50aXR5IjoicGEiLCJleHAiOjE2MTUzNjg2MDgsInVzZXJfY2xhaW1zIjp7ImFkbWluIjp0cnVlfX0.Dta-ZFl1uwevtBSiec9sJ9fkRBUHdtqFC_lnsdDGmvI"},
                parseResponse: ({data}) => {
                    if (data[`${resource}`]) {
                        return {data: {id: params.objectID}};
                    }

                    throw new Error(`Could not find ${resource}`);
                },
            };
        }
        /* if (type === DELETE) {
            return {
                query: gql`mutation remove${resource}($id: ID!) {
                    remove${resource}(id: $id)
                }`,
                variables: {id: params.id},
                parseResponse: ({data}) => {
                    if (data[`remove${resource}`]) {
                        return {data: {id: params.id}};
                    }

                    throw new Error(`Could not delete ${resource}`);
                },
            };
        } */

        return buildQuery(type, resource, params);
    };
};

export default () => {
    return buildApolloClient({
        clientOptions: {
            uri: apiUrl,
        },
        introspection: {
            operationNames: {
                [GET_ONE]: resource => `${resource.name}`,
                [GET_LIST]: resource => `${resource.name}`,
        },
        },
        buildQuery: customBuildQuery,
    }).then(dataProvider => (type, resource, params) =>
      dataProvider(type, /* getGqlResource(resource) */ resource, params)
    );
};


/* export default type => {
    switch (type) {
        case 'graphql':
            return import('./graphql').then(factory => factory.default());
        default:
            return import('./rest').then(provider => provider.default);
    }
}; */
