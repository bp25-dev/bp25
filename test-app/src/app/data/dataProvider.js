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
                variables: {token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXBlIjoiYWNjZXNzIiwiaWF0IjoxNjE1MTMzMjg1LCJuYmYiOjE2MTUxMzMyODUsImp0aSI6IjBkYTcyZjg5LTU2YjUtNDNkMC04Zjk3LWE2OWViNWNhNGE2NyIsImlkZW50aXR5IjoicGEiLCJleHAiOjE2MTUxMzQxODUsInVzZXJfY2xhaW1zIjp7ImFkbWluIjp0cnVlfX0.5wg0y9C3gQmP0KmFMxRdZUtR_agFR-d1uKM4oNHmJwY"},
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
                variables: {token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXBlIjoiYWNjZXNzIiwiaWF0IjoxNjE1MTMzMjg1LCJuYmYiOjE2MTUxMzMyODUsImp0aSI6IjBkYTcyZjg5LTU2YjUtNDNkMC04Zjk3LWE2OWViNWNhNGE2NyIsImlkZW50aXR5IjoicGEiLCJleHAiOjE2MTUxMzQxODUsInVzZXJfY2xhaW1zIjp7ImFkbWluIjp0cnVlfX0.5wg0y9C3gQmP0KmFMxRdZUtR_agFR-d1uKM4oNHmJwY"},
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




/* export const createBadge = (token, id, name, picture, unlocked_picture, description, cost) => {
    return `
mutation {
    createBadge(
        token:"`+ token + `",
        id:"`+ id + `" ,
        name:"`+ name + `" ,
        picture:"`+ picture + `",
        unlocked_picture:"`+ unlocked_picture + `",
        description:"`+ description + `",
        cost:"`+ cost + `")
    {
 badge
 {
    id
   name
 }
    }
    }
`
}

export const updateBadge = (token, id, name, picture, unlocked_picture, description, cost) => {
    console.log(token, id, name, picture, unlocked_picture, description, cost )
    return ` mutation {
    updateBadge(
        id:"`+ id + `" ,
        token:"`+ token + `" ,
        name:"`+ name + `" ,
        picture:"`+ picture + `",
        unlocked_picture:"`+ unlocked_picture + `",
        description:"`+ description + `",
        cost:"`+ cost + `")
    {
 badge
 {
    id
    name
    }
}
}
`
} */

/* export default type => {
    switch (type) {
        case 'graphql':
            return import('./graphql').then(factory => factory.default());
        default:
            return import('./rest').then(provider => provider.default);
    }
}; */
