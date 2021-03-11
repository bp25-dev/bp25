import gql from 'graphql-tag';
import { buildQuery } from 'ra-data-graphql-simple';

export const customBuildQuery = (introspectionResults) => (fetchType, resourceName, params ) => {
  /* 
    const resource = introspectionResults.resources.find(r => r.type.name === resourceName);
    switch (fetchType) {
        case 'GET_ONE':
            return {
                query: gql`query ${resource[fetchType].name}($token: String!) {
                    data: ${resource[fetchType].name}(token: $token) {
                        ${buildFieldList(introspectionResults, resource, fetchType)}
                    }
                }`,
                variables: params, // params = { id: ... }
                parseResponse: response => response.data,
            }
            break;
    } 
    */
  const builtQuery = buildQuery(introspectionResults)(fetchType, resourceName, params);

  if (resourceName === 'museumObject' && fetchType === 'GET_ONE') {
    return {
      // Use the default query variables and parseResponse
      ...builtQuery,
      // Override the query
      query: gql`
        query allObjects($token: String!) {
          data: Command(token: $token) {
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
  return builtQuery;
};
