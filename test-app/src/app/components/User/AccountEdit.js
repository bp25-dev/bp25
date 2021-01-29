
import React from 'react';
import {
  Edit,
  SimpleForm,
  PasswordInput,
  TextInput,
  BooleanInput,
} from 'react-admin';

export const AccountEdit = (props) => (
    <Edit title='Accountdaten ändern' {...props}>
      <SimpleForm>
        <TextInput disabled source='id' label='ID' fullWidth />
        <TextInput source='username' label='Benutzername' fullWidth/>
        <PasswordInput source='password' label='Passwort' fullWidth/>
        <BooleanInput source='Adminrechte' label='Adminrechte erlauben?' />
      </SimpleForm>
    </Edit>
  );
  
  