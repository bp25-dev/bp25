import React from 'react';
import AddExponate from '../components/Exponate/AddExponate';
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  Edit,
  SimpleForm,
  TextInput,
  Create,
  Filter
} from 'react-admin';

// filter function for Exponate (search for text)
const ExponateFilter = (props) => (
  <Filter {...props}>
    <TextInput label='Suche' source='q' alwaysOn />
  </Filter>
);

// list the exhibits
export const ExponateList = (props) => (
  <List {...props} filters={<ExponateFilter />}>
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

// edit an exhibit
export const ExponateEdit = (props) => (
  <Edit title='Bearbeite Exponate' {...props}>
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

// create a new exhibit
// todo: ID should not be created manually but automacially (distinct id)
export const ExponateCreate = (props) => (
  <Create title='Erstelle Exponate' {...props}>
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

// todo: embed text on the side -> move to resource in App.js?
export default class Exponate extends React.Component {
  render() {
    return (
      <div>
        <h1>Exponaten-Seite</h1>
        <AddExponate></AddExponate>
      </div>
    );
  }
}
