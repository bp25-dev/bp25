//import { gql, useQuery, useMutation } from '@apollo/client';
import { gql } from 'graphql-request'


// some possible test queries for checking connection
export const SIGNUP = gql`
  mutation createAdmin($username: String!, $password: String!) {
    createAdmin(username: $username, password: $password) {
        user {
          username
        }
        ok
    }
  }
`;

export const AUTH = gql`
  mutation auth($username: String!, $password: String!) {
    auth(username: $username, password: $password) {
        accessToken
    }
  }
`;

export const REFRESH = gql`
  mutation refresh($refreshToken: String!) {
    refresh(refreshToken: $refreshToken) {
        id
        newToken 
    }
  }
`;

export const GET_ALL_OBJECTS = gql`
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
`;

// get object by id 
export const GET_OBJECT = gql`
  mutation museumobject($token: String!, $objectId: String!) {
    museumObject(token: $token, objectId: $objectId) {
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
`;