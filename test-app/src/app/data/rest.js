import { stringify } from 'query-string';
import {
  fetchUtils,
  GET_LIST,
  GET_ONE,
  GET_MANY,
  GET_MANY_REFERENCE,
  CREATE,
  UPDATE,
  UPDATE_MANY,
  DELETE,
  DELETE_MANY,
} from 'react-admin';


// TODO: 
// localhost:5000/file/download?type=Badge&id=Gegangene_Rundgaenge_gold

export default (/* apiUrl, */ httpClient = fetchUtils.fetchJson) => {
    const apiUrl = 'http://127.0.0.1:5000/web';
    const convertDataRequestToHTTP = (type, resource, params) => {
    let url = '';
    const options = {};
    switch (type) {
        // part 1: REST calls 
        case GET_LIST: {
            const { page, perPage } = params.pagination;
            const { field, order } = params.sort;
            const query = {
                ...fetchUtils.flattenObject(params.filter),
                sort: field,
                order: order,
                start: (page - 1) * perPage,
                end: page * perPage,
            };
                url = `${apiUrl}/${resource}?${stringify(query)}`;
            break;
        }
        case GET_ONE:
            url = `${apiUrl}/${resource}/${params.id}`;
            break;
        case GET_MANY_REFERENCE: {
            const { page, perPage } = params.pagination;
            const { field, order } = params.sort;
            const query = {
                ...fetchUtils.flattenObject(params.filter),
                [params.target]: params.id,
                _sort: field,
                _order: order,
                _start: (page - 1) * perPage,
                _end: page * perPage,
            };
            url = `${apiUrl}/${resource}?${stringify(query)}`;
            break;
        }
        // part 2: requests
        // TODO: via /file/{function} 
        // function can be: download, upload, 
        // call:  /file/<function>?parameter=value
        // example: localhost:5000/file/download?type=ProfilePicture&id=5ee346d8661851bd412427ca 
        case UPDATE:
            url = `${apiUrl}/${resource}/${params.id}`;
            options.method = 'POST';
            options.body = JSON.stringify(params.data);
            break;
        case CREATE:
            url = `${apiUrl}/${resource}`;
            options.method = 'PUT';
            options.body = JSON.stringify(params.data);
            break;
        case DELETE:
            url = `${apiUrl}/${resource}/${params.id}`;
            options.method = 'DELETE';
            break;
        case GET_MANY: {
            url = `${apiUrl}/${resource}`;
            break;
        }
        default:
            throw new Error(`Unsupported fetch action type ${type}`);
    }
    return { url, options };
};

const convertHTTPResponse = (response, type, resource, params) => {
    const { headers, json } = response;
    switch (type) {
        case GET_LIST:
        case GET_MANY_REFERENCE:
            if (!headers.has('x-total-count')) {
                throw new Error(
                    'The X-Total-Count header is missing in the HTTP Response. The jsonServer Data Provider expects responses for lists of resources to contain this header with the total number of results to build the pagination. If you are using CORS, did you declare X-Total-Count in the Access-Control-Expose-Headers header?'
                );
            }
            return {
                data: json,
                total: parseInt(
                    headers
                        .get('x-total-count')
                        .split('/')
                        .pop(),
                    10
                ),
            };
        case CREATE:
            return { data: { ...params.data, id: json.id } };
        default:
            return { data: json };
    }
};

return (type, resource, params) => {
    // json-server doesn't handle filters on UPDATE route, so we fallback to calling UPDATE n times instead
    if (type === UPDATE_MANY) {
        return Promise.all(
            params.ids.map(id =>
                httpClient(`${apiUrl}/${resource}/${id}`, {
                    method: 'PUT',
                    body: JSON.stringify(params.data),
                })
            )
        ).then(responses => ({
            data: responses.map(response => response.json),
        }));
    }
    // json-server doesn't handle filters on DELETE route, so we fallback to calling DELETE n times instead
    if (type === DELETE_MANY) {
        return Promise.all(
            params.ids.map(id =>
                httpClient(`${apiUrl}/${resource}/${id}`, {
                    method: 'DELETE',
                })
            )
        ).then(responses => ({
            data: responses.map(response => response.json),
        }));
    }
    const { url, options } = convertDataRequestToHTTP(
        type,
        resource,
        params
    );
    return httpClient(url, options).then(response =>
        convertHTTPResponse(response, type, resource, params)
    );
};
};