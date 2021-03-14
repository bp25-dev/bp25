import { fetchUtils, GET_ONE, Admin, Resource, Query } from 'react-admin';
import { stringify } from 'query-string';
import simpleRestProvider from 'ra-data-simple-rest';


// custom http client 
const fetchJson = (url, options = {}) => {
    options.user = {
        authenticated: true,
        token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXBlIjoiYWNjZXNzIiwiaWF0IjoxNjE1MTMwNDQ4LCJuYmYiOjE2MTUxMzA0NDgsImp0aSI6ImYwNDZjMWY5LTI2Y2MtNDdkYS05M2YxLTFkYmExZWRiMjBhNyIsImlkZW50aXR5IjoicGEiLCJleHAiOjE2MTUxMzEzNDgsInVzZXJfY2xhaW1zIjp7ImFkbWluIjp0cnVlfX0.EF3T2Vs9Pcl1tZhrp_MCINxCdi4rdQ_rJc5Vf_68EVE'
    };
    return fetchUtils.fetchJson(url, options);
};
export default simpleRestProvider('http://127.0.0.1:5000/web', fetchJson);
// url = 'localhost:5000/file/download?type=Badge&id=Gegangene_Rundgaenge_silber'
