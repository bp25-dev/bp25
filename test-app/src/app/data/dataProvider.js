import buildGraphQLProvider from 'ra-data-graphql-simple';
import buildApolloClient, {
    buildQuery as buildQueryFactory,
} from 'ra-data-graphql-simple';
import { DELETE } from 'ra-core';
import gql from 'graphql-tag';
import simpleRestProvider from 'ra-data-simple-rest';

const apiUrl = 'localhost:5000/web';

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
}); */

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


const customBuildQuery = introspectionResults => {
    const buildQuery = buildQueryFactory(introspectionResults);

    return (type, resource, params) => {
        if (type === DELETE) {
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
        }

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
                [DELETE]: resource => `remove${resource.name}`,
        },
        },
        buildQuery: customBuildQuery,
    }).then(dataProvider => (type, resource, params) =>
      dataProvider(type, getGqlResource(resource), params)
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

// query tour: http://localhost:5000/web/?operationName=tour&query=query%20tour%20%7B%0A%20%20tour
// (token%3A%22eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXBlIjoiYWNjZXNzIiwiaWF0IjoxNTg1MTQzNTc5LCJuYmYiOjE1ODUxNDM1NzksImp0aSI6IjFjOTMyNDczLTRiYTAtNDYxNi1hYzc4LTQ1ZjBhYTQzYjhkMiIsImlkZW50aXR5IjoidGVzdCIsImV4cCI6MTU4NTE0NDQ3OSwidXNlcl9jbGFpbXMiOnsiYWRtaW4iOnRydWV9fQ.cKz7WyGODvfkOfT3UB2xCqVl4lU7McvEPOM-F9hvYP8%22%2CtourId%3A%225e7b5fa4aaaa08287c60a2a0%22)%0A%20%20%7B%0A%20%20%20%20name%0A%20%20%20%20id%0A%20%20%7D%0A%7D