import React, {fetchUtils} from 'react'
import { gql, useQuery } from '@apollo/client'
import simpleRestProvider from 'ra-data-simple-rest';

export const request = fetch('http://127.0.0.1:5000/web', {
  method: 'GET',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ query: `
    query {
  allObjects(token:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXBlIjoiYWNjZXNzIiwiaWF0IjoxNjE1MTMxOTQ4LCJuYmYiOjE2MTUxMzE5NDgsImp0aSI6ImNiNjAwNzQ3LTFkYmMtNGEyMi04ZjRiLWEyODMxNGIzMTk3NyIsImlkZW50aXR5IjoicGEiLCJleHAiOjE2MTUxMzI4NDgsInVzZXJfY2xhaW1zIjp7ImFkbWluIjp0cnVlfX0.50xO3ZwcngV-SLd0IQasxAkocv44E0RDPGXyc3JCxnY") {
    objectId
  }
}` 
  }),
})


/* const GET_ALL_OBJECTS = gql`
query all_objects{
  allObjects(token:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXBlIjoiYWNjZXNzIiwiaWF0IjoxNjE1MTMxOTQ4LCJuYmYiOjE2MTUxMzE5NDgsImp0aSI6ImNiNjAwNzQ3LTFkYmMtNGEyMi04ZjRiLWEyODMxNGIzMTk3NyIsImlkZW50aXR5IjoicGEiLCJleHAiOjE2MTUxMzI4NDgsInVzZXJfY2xhaW1zIjp7ImFkbWluIjp0cnVlfX0.50xO3ZwcngV-SLd0IQasxAkocv44E0RDPGXyc3JCxnY") {
    objectId
  }
}
`;

export const objects = () => {
    const { loading, error, data } = useQuery(GET_ALL_OBJECTS);
  
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
  
    return (
      <ul>
        { data.object.map((i) => (
          <li key={object._id}>{object.name}</li>
        ))}
      </ul>
    )
  } */