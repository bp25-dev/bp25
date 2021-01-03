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
  
  const TourenFilter = (props) => (
      <Filter {...props}>
         <TextInput label="Suche" source="q" alwaysOn />
         <TextInput label="Status" source="featured" defaultValue="featured" />
      </Filter>
  );
  
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

