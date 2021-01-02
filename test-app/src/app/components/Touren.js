import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  UrlField,
  Edit,
  SimpleForm,
  TextInput,
  Create,
} from 'react-admin';

// -- snip --
export const TourenList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source='ID' />
      <TextField source='Name' />
      <TextField source='Titel' />
      <TextField source='Beschreibung' />
      <TextField source='Status' />
      <EditButton basePath='./app/components/Touren.js' />
    </Datagrid>
  </List>
);

export const TourenEdit = (props) => (
  <Edit title='Bearbeite Touren' {...props}>
    <SimpleForm>
      <TextInput source='ID' />
      <TextInput source='Name' />
      <TextInput source='Titel' />
      <TextInput source='Beschreibung' />
      <TextInput source='Status' />
    </SimpleForm>
  </Edit>
);

export const TourenCreate = (props) => (
  <Create title='Erstelle Touren' {...props}>
    <SimpleForm>
      <TextInput source='ID' />
      <TextInput source='Name' />
      <TextInput source='Titel' />
      <TextInput source='Beschreibung' />
      <TextInput source='status' />
    </SimpleForm>
  </Create>
);
