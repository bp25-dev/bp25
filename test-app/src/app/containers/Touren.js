import React from 'react';
import TourEdit from '../components/Touren/TourEdit';
import {
  List,
  Edit,
  Create,
  Datagrid,
  SimpleForm,
  //options
  SimpleFormIterator,
  Filter,
  EditButton,
  Show,
  SimpleShowLayout,
  //fields
  TextField,
  ReferenceField,
  DateField,
  NumberField,
  ChipField,
  ArrayField,
  BooleanField,
  UrlField,
  //inputs
  SelectInput,
  ImageInput,
  ArrayInput,
  BooleanInput,
  TextInput,
} from 'react-admin';

// filter the tours (search for text)
// filter for featured tours (todo, not working yet)
const TourenFilter = (props) => (
  <Filter {...props}>
    <TextInput label='Suche' source='q' alwaysOn />
    <SelectInput
      source='Status'
      choices={[
        { id: 'featured', name: 'freigegeben' },
        { id: 'pending', name: 'ausstehend' },
        { id: 'private', name: 'privat' },
      ]}
      alwaysOn
    />
  </Filter>
);

//edit expand component
// edit expand component
const StationShow = (props) => (
  <Show
    {...props}
    /* disable the app title change when shown */
    title=' '
  >
    <SimpleShowLayout>
      <ArrayField source='Stationen'>
        <Datagrid>
          {/*  if no object is there it is an individual slide and foto, text, details should be deactivated */}
          <TextField source='Objekt' />
          <TextField source='Foto' />
          <TextField source='Text' />
          <TextField source='Details' />
          <TextField source='Textfeld' />
          <ArrayField source='Fragen'>
            <Datagrid>
              <TextField source='Antwort' />
              <BooleanField source='Antwort' />
            </Datagrid>
          </ArrayField>
          <UrlField source='Bild' />
        </Datagrid>
      </ArrayField>
    </SimpleShowLayout>
  </Show>
);

// list existing tours
export const TourenList = (props) => (
  <List {...props} title='Touren' filters={<TourenFilter />}>
    <Datagrid expand={<StationShow />}>
      <TextField source='ID' />
      <TextField source='name' label='Titel' />
      <TextField source='description' label='Beschreibung' />
      <ReferenceField label='Besitzer' source='username' reference='Admins'>
        <TextField source='username' />
      </ReferenceField>
      <ArrayField source='users' label='Benutzer'>
        <Datagrid>
          <ReferenceField label='Benutzer' source='username' reference='Admins'>
            <TextField source='username' />
          </ReferenceField>
        </Datagrid>
      </ArrayField>
      <TextField source='search_id' label='Such ID' />
      <TextField source='session_id' label='Session ID' />
      <DateField source='lastEdit' label='letzte Bearbeitung' />
      <NumberField source='difficulty' label='Schwierigkeitsgrad' />
      <ChipField source='status' label='Status' />
      <EditButton />
    </Datagrid>
  </List>
);

// edit a tour
export const TourenEdit = (props) => (
  <Edit title='Bearbeite Touren' {...props}>
    <SimpleForm>
      <TextInput disabled source='ID' />
      <TextInput source='Name' />
      <TextInput source='Titel' />
      <TextInput source='Beschreibung' />
      <SelectInput
        source='Status'
        choices={[
          { id: 'freigegeben', name: 'freigegeben' },
          { id: 'ausstehend', name: 'ausstehend' },
          { id: 'privat', name: 'privat' },
        ]}
      />
      <ArrayInput source='Stationen'>
        <SimpleFormIterator>
          <TextField source='Objekt' />
          <BooleanInput source='Foto' />
          <BooleanInput source='Text' />
          <BooleanInput source='Details' />
          <TextInput source='Textfeld' />
          <ArrayInput source='Fragen'>
            <SimpleFormIterator>
              <TextInput source='Antwort' />
              <BooleanInput source='Antwort' />
            </SimpleFormIterator>
          </ArrayInput>
          <ImageInput source='Bild' />
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Edit>
);

// create a new tour
// todo: ID should not be created manually but automatically (distinct id)
export const TourenCreate = (props) => (
  <Create title='Erstelle Touren' {...props}>
    <SimpleForm>
      <TextInput source='ID' />
      <TextInput source='Name' />
      <TextInput source='Titel' />
      <TextInput source='Beschreibung' />
      <SelectInput
        source='Status'
        choices={[
          { id: 'freigegeben', name: 'freigegeben' },
          { id: 'ausstehend', name: 'ausstehend' },
          { id: 'privat', name: 'privat' },
        ]}
      />
      <ArrayInput source='Stationen'>
        <SimpleFormIterator>
          <TextField source='Objekt' />
          <BooleanInput source='Foto' />
          <BooleanInput source='Text' />
          <BooleanInput source='Details' />
          <TextInput source='Textfeld' />
          <ArrayInput source='Fragen'>
            <SimpleFormIterator>
              <TextInput source='Antwort' />
              <BooleanInput source='Antwort' />
            </SimpleFormIterator>
          </ArrayInput>
          <ImageInput source='Bild' />
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Create>
);

// todo: embed text on the side -> move to resource in App.js?
export default class Touren extends React.Component {
  render() {
    return (
      <div>
        <h1>Touren-Seite</h1>
        <TourEdit></TourEdit>
      </div>
    );
  }
}