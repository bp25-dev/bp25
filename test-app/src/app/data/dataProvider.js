import jsonapiClient from 'ra-jsonapi-client';
import buildGraphQLProvider from 'ra-data-graphql-simple';

const apiUrl = 'localhost:5000/web';
const dataProvider = jsonapiClient(apiUrl);


export const createBadge = (token, id, name, picture, unlocked_picture, description, cost) => {
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
