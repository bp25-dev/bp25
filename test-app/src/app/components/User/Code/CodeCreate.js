import React from 'react';
import {
  Create,
  SimpleForm,
  TextInput,
} from 'react-admin';
  
  export const CodeCreate = (props) => (
    <Create {...props}>
      <SimpleForm>
        <TextInput source='Code' label='Code' fullWidth />
      </SimpleForm>
    </Create>
  );