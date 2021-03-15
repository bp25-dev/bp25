import { gql } from 'graphql-request'
import { buildQuery as buildQueryFactory, } from 'ra-data-graphql-simple';
import { GET_ONE, GET_LIST, DELETE } from 'react-admin';

export const customBuildQuery = introspection => {
    console.log(introspection)
  const buildQuery = buildQueryFactory(introspection);
  return (type, resource, params) => {
      console.log(type,resource, params)
    if (type === GET_ONE) {
      return {
          query: gql`query${resource}($token: String!, $objectId: String!) {
              query${resource}(token: $token, objectId: $objectId)
          }`,
          variables: params,
          parseResponse:response => response.data,
      };
  }
  if (type === GET_LIST) {
    return {
        query: gql`query${resource}($token: String!) {
            query${resource}(token: $token)
        }`,
        variables: params,
        parseResponse:response => response.data,
    };
}
  if (type === DELETE) {
    return {
        query: gql`mutation ${resource}($token: String!, $objectId: String!) {
            ${resource}(token: $token, objectId: $objectId)
        }`,
        variables: {id: params.id},
        parseResponse: ({data}) => {
            if (data[`delete${resource}`]) {
                return {data: {id: params.id}};
            }

            throw new Error(`Could not delete ${resource}`);
        },
    };
}
  return buildQuery(type, resource, params);
  }
}; 

export const testQuery = introspection => (fetchType, resource, params) => {
    console.log(introspection)
    const builtQuery = buildQueryFactory(introspection)(fetchType, resource, params);
    if (resource === 'museumObject' && fetchType === 'GET_LIST') {
        return {
            // Use the default query variables and parseResponse
            ...builtQuery,
            // Override the query
            query: gql`
            mutation allObjects($token: String!) {
              allObjects(token: $token) {
                  object_id
                  category
                  sub_category
                  title
                  time_range
                  year
                  picture {
                    id
                  }
                  art_type
                  creator
                  material
                  size_
                  location
                  description
                  additionalInformation
                  interdisciplinaryContext
              }
            }
          `,
        };
    }
    console.log(builtQuery)
    return builtQuery;
};