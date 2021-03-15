import React from 'react';
import {
  Create,
  SimpleForm,
  PasswordInput,
  TextInput,
  BooleanInput,
} from 'react-admin';

// TODO: should be limited to admins 
export const UserCreate = (props) => (
  <Create title='Erstelle Profil' {...props}>
    <SimpleForm>
      <TextInput source='username' label='Benutzer*innen-Name' fullWidth/>
      <PasswordInput source='password' label='Passwort' fullWidth/>
      <BooleanInput source='Adminrechte' label='Adminrechte erlauben?' />
    </SimpleForm>
  </Create>
);