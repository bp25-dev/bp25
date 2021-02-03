import React from 'react';
import {
  Create,
  SimpleForm,
  PasswordInput,
  TextInput,
  BooleanInput,
} from 'react-admin';



// create a new user
export const UserCreate = (props) => (
  <Create title='Erstelle Admin' {...props}>
    <SimpleForm>
      <TextInput source='username' label='Benutzername' fullWidth/>
      <PasswordInput source='password' label='Passwort' fullWidth/>
      <BooleanInput source='Adminrechte' label='Adminrechte erlauben?' />
    </SimpleForm>
  </Create>
);