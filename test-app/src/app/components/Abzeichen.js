import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  ImageField,
  ImageInput,
  EditButton,
  Edit,
  SimpleForm,
  TextInput,
  Create,
} from 'react-admin';


export const AbzeichenList = (props) => (
  <List {...props} >
    <Datagrid /* rowClick='edit' */>
      <TextField source='AbzeichenID' label='ID' />
      <ImageField source='Bild' />
      <EditButton basePath='./app/components/Abzeichen.js' />
    </Datagrid>
  </List>
);

export const AbzeichenEdit = (props) => (
    <Edit title='Verändere Verknüpfung'{...props}>
      <SimpleForm>
        <TextInput disabled source='AbzeichenID' />
        <ImageInput source='Bild' />
      </SimpleForm>
    </Edit>
  );

export const AbzeichenCreate = (props) => (
    <Create title='Lade Abzeichen hoch'{...props}>
      <SimpleForm>
        <TextInput disabled source='AbzeichenID' />
        <ImageInput source='Bild' />
      </SimpleForm>
    </Create>
  );
  