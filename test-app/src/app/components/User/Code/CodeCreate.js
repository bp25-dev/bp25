import React from 'react';
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
