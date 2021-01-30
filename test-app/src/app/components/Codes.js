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
import Typography from '@material-ui/core/Typography';
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';


const Aside = (props) => (
  <div style={{ width: 200, margin: '1em' }}>
  <Typography variant="h6">Code Verteilung</Typography>
  <Typography variant="body2">
      Vergebene Codes: {props.total}
  </Typography>
</div>
);

export const CodeList = (props) => (

    <List {...props} title='Ersteller Codes' aside={<Aside />}>
      <Datagrid>
        <TextField source='id' label='ID' />
        <TextField source='Code' />
       {/*  reference to users */}
       <TextField source='Benutzername' />
       {/* <BooleanField
        source='producer'
        label='Ersteller'
        TrueIcon={DoneIcon}
        FalseIcon={ClearIcon}
      /> */}
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