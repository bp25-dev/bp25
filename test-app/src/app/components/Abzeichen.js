import React from 'react';
import { Fragment } from 'react';
import {
  List,
  Datagrid,
  TextField,
  UrlField,
  ImageField,
  ImageInput,
  EditButton,
  Edit,
  SimpleForm,
  TextInput,
  Create,
  SimpleShowLayout,
  Show
} from 'react-admin';

// edit expand component
const ImageShow = props => (
  <Show
      {...props}
      /* disable the app title change when shown */
      title=" "
  >
      <SimpleShowLayout>
      <ImageField source="Bild"/>
      <UrlField source='Bild' label='Url' />
      </SimpleShowLayout>
  </Show>
);

// list existing badges 
export const AbzeichenList = (props) => (
  <List {...props} title='Abzeichen' >
    <Datagrid expand={<ImageShow />}>
      <TextField source='AbzeichenID' label='ID' />
      <TextField source='Beschreibung' />
      <EditButton basePath='./app/components/Abzeichen.js' />
    </Datagrid>
  </List>
);

// edit badges 
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

  // create a new badge 
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
  