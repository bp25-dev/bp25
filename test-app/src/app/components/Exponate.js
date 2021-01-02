import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  EmailField,
  UrlField,
  Edit,
  SimpleForm,
  TextInput,
  Create,
} from 'react-admin';

// -- snip --
export const ExponateList = (props) => (
  <List {...props}>
    <Datagrid /* rowClick='edit' */>
      <TextField source='ObjektID' label='ID' />
      <TextField source='Kategorie' />
      <TextField source='Subkategorie' />
      <TextField source='Titel' />
      <TextField source='Jahr' />
      <TextField source='Bild' />
      <TextField source='Kunsttyp' />
      <TextField source='Ersteller' />
      <TextField source='Material' />
      <TextField source='Größe' />
      <TextField source='Ort' />
      <TextField source='Beschreibung' />
      <TextField source='Interdisziplinärkontext' />
      <EditButton basePath='./app/components/Exponate.js' />
    </Datagrid>
  </List>
);

export const ExponateEdit = (props) => (
  <Edit title='Bearbeite Exponate'{...props}>
    <SimpleForm>
      <TextInput disabled source='ObjektID' />
      <TextInput source='Kategorie' />
      <TextInput source='Subkategorie' />
      <TextInput source='Titel' />
      <TextInput source='Jahr' />
      <TextInput source='Bild' />
      <TextInput source='Kunsttyp' />
      <TextInput source='Ersteller' />
      <TextInput source='Material' />
      <TextInput source='Größe' />
      <TextInput source='Ort' />
      <TextInput source='Beschreibung' />
      <TextInput source='Interdisziplinärkontext' />
    </SimpleForm>
  </Edit>
);

export const ExponateCreate = (props) => (
  <Create title='Erstelle Exponate'{...props}>
    <SimpleForm>
    <TextInput source='Kategorie' />
      <TextInput source='Subkategorie' />
      <TextInput source='Titel' />
      <TextInput source='Jahr' />
      <TextInput source='Bild' />
      <TextInput source='Kunsttyp' />
      <TextInput source='Ersteller' />
      <TextInput source='Material' />
      <TextInput source='Größe' />
      <TextInput source='Ort' />
      <TextInput source='Beschreibung' />
      <TextInput source='Interdisziplinärkontext' />
    </SimpleForm>
  </Create>
);
