import React from 'react';
<<<<<<< HEAD
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
=======
import { Create, SimpleForm, TextInput, SelectInput, ReferenceInput } from 'react-admin';

const randomChoice = [{ code: Math.random().toString(36).substr(2, 5) }];

export const CodeCreate = (props) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectInput
          source='code'
          label='Code'
          choices={randomChoice}
          optionText='code'
          optionValue='code'
        />
        <ReferenceInput label='Benutzer' source='username' reference='Benutzer'>
          <SelectInput optionText='username' />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
>>>>>>> anna_dev
