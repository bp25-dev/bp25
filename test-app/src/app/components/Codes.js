import React from 'react';
import {
  List,
  Edit,
  Create,
  Datagrid,
  SimpleForm,
  TextField,
  TextInput,
} from 'react-admin';

export const CodeList = (props) => (

    <List {...props} title='Ersteller Codes'>
      <Datagrid>
        <TextField source='id' label='ID' />\
        <TextField source='Code' />
      </Datagrid>
    </List>
  );
  
  export const CodeCreate = (props) => (
    <Create {...props}>
      <SimpleForm>
        <TextInput source='Code' />
      </SimpleForm>
    </Create>
  );