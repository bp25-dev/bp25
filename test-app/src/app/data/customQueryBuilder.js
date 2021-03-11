export const customBuildQuery = introspectionResults => (raFetchType, resourceName, params) => {
    const resource = introspectionResults.resources.find(r => r.type.name === resourceName);

    switch (raFetchType) {
        case 'GET_ONE':
            return {
                query: gql`query ${resource[raFetchType].name}($token: String!) {
                    data: ${resource[raFetchType].name}(token: $token) {
                        ${buildFieldList(introspectionResults, resource, raFetchType)}
                    }
                }`,
                variables: params, // params = { id: ... }
                parseResponse: response => response.data,
            }
            break;
        // ... other types handled here
    }
}