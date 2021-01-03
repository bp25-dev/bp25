import React from 'react';
import TourEdit from '../components/Touren/TourEdit';
import {
    List,
    Filter,
    Datagrid,
    TextField,
    EditButton,
    Edit,
    SimpleForm,
    TextInput,
    Create,
  } from 'react-admin';
  
  // filter the tours (search for text)
  // filter for featured tours (todo, not working yet)
  const TourenFilter = (props) => (
      <Filter {...props}>
         <TextInput label="Suche" source="q" alwaysOn />
         <TextInput label="Status" source="featured" defaultValue="featured" />
      </Filter>
  );
  
  // list existing tours 
  export const TourenList = (props) => (
    <List {...props}filters={<TourenFilter />}>
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
  
  // edit a tour
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
  
  // create a new tour 
  // todo: ID should not be created manually but automatically (distinct id)
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
  
// todo: embed text on the side -> move to resource in App.js? 
export default class Touren extends React.Component {
    render() {
        return(
            <div>
                <h1>Touren-Seite</h1>
              <TourEdit></TourEdit>
            </div>
        )    
    }
}

