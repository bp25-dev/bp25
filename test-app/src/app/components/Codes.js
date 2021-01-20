import React from 'react';
import {
  List,
  Edit,
  Create,
  Datagrid,
  SimpleForm,
  TextField,
  TextInput,
  BooleanField
} from 'react-admin';
// material UI imports
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';

export const CodeList = (props) => (

    <List {...props} title='Ersteller Codes'>
      <Datagrid>
        <TextField source='id' label='ID' />
        <TextField source='Code' />
       {/*  reference to users */}
       <TextField source='username' />
       <BooleanField
        source='producer'
        label='Ersteller'
        TrueIcon={DoneIcon}
        FalseIcon={ClearIcon}
      />
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