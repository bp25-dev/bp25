import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';

const SIGNUP_MUTATION = gql`
    mutation signup (
        $username: String!
        $password: String!
    ) {
    createAdmin(
       username: $username
       password: $password
    )
    {
      user
      {
        username 
      }
    }
  }`;

const LOGIN_MUTATION = gql`
  mutation login(
    $username: String!
    $password: String!
  ) {
    auth(
        username: $username
        password: $password)
    {
      accessToken
    }
  }`;
  
/* 
export const [login] = useMutation(LOGIN_MUTATION, {
    variables: {
      username: formState.username,
      password: formState.password
    },
    onCompleted: ({ login }) => {
      localStorage.setItem('token', login.token);
      history.push('/');
    }
  });
  
export const [signup] = useMutation(SIGNUP_MUTATION, {
    variables: {
      username: formState.username,
      password: formState.password
    },
    onCompleted: ({ signup }) => {
      localStorage.setItem('token', signup.token);
      history.push('/');
    }
  });

  const LOGIN = useMutation(AUTH, {
    variables: {
      username: formState.username,
      password: formState.password
    },
    onCompleted: ({ login }) => {
      localStorage.setItem('token', login.accessToken);
      history.push('/');
    }
  }); 
 */