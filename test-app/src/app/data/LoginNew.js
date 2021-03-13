import React, { useState } from 'react';
import { useHistory } from 'react-router';
import {AUTH} from './testmethods/testQueries.js';
import { useMutation, gql } from '@apollo/client';

// TODO: use auth mutation for login 
const [login] = useMutation(AUTH, {
    variables: {
      username: formState.username,
      password: formState.password
    },
    onCompleted: ({ login }) => {
      localStorage.setItem('token', login.accessToken);
      history.push('/');
    }
  });

const Login = () => {
  const history = useHistory();
  const [formState, setFormState] = useState({
    login: true,
    username: '',
    password: '',
  });
  return (
    <div>
      <h4 className='mv3'>{formState.login ? 'login' : 'Anmelden'}</h4>
      <div className='flex flex-column'>
        <input
          value={formState.username}
          onChange={(e) =>
            setFormState({
              ...formState,
              username: e.target.value,
            })
          }
          type='text'
          placeholder='Benutzername'
        />
        <input
          value={formState.password}
          onChange={(e) =>
            setFormState({
              ...formState,
              password: e.target.value,
            })
          }
          type='password'
          placeholder='Passwort'
        />
      </div>
      <div className='flex mt3'>
        <button
          className='pointer mr2 button'
          onClick={() => console.log('onClick')}
        >
          {formState.login ? 'login' : 'Account erstellen'}
        </button>
        <button
          className='pointer button'
          onClick={(e) =>
            setFormState({
              ...formState,
              login: !formState.login
            })
          }
        >
          {formState.login ? 'neuer Account' : 'bereits bestehender Account'}
        </button>
      </div>
    </div>
  );
};

export default Login;
