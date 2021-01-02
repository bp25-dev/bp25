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
      <TextField source='Beschreibung' />
      <ImageField source="Url" />
      <EditButton basePath='./app/components/Abzeichen.js' />
    </Datagrid>
  </List>
);

export const AbzeichenEdit = (props) => (
    <Edit title='Verändere Verknüpfung'{...props}>
      <SimpleForm>
        <TextInput disabled source='AbzeichenID' />
        <TextInput source='Beschreibung' />
        <ImageInput source="Abzeichen" accept="image/*">
            <ImageField source="src" title="title" />
        </ImageInput>

      </SimpleForm>
    </Edit>
  );

export const AbzeichenCreate = (props) => (
    <Create title='Lade Abzeichen hoch'{...props}>
      <SimpleForm>
        <TextInput disabled source='AbzeichenID' />
        <TextInput source='Beschreibung' />
        <ImageInput source="Abzeichen" accept="image/*">
            <ImageField source="src" title="title" />
        </ImageInput>
      </SimpleForm>
    </Create>
  );
  