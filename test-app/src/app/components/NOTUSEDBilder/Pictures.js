import React from 'react';
import {
  List,
  Datagrid,
  UrlField,
  ImageField,
  ImageInput,
  EditButton,
  Edit,
  SimpleForm,
  Create,
  SimpleShowLayout,
  Show,
} from 'react-admin';
import PictureGrid from './PictureGrid';
import { CustomListActions } from '../../containers/CustomActions/CustomListActions.js';
import { CustomBulkActions } from '../../containers/CustomActions/CustomBulkActions.js';

// edit expand component
const ImageShow = (props) => (
  <Show
    {...props}
    /* disable the app title change when shown */
    title=' '
  >
    <SimpleShowLayout>
      <ImageField source='picture' />
      <UrlField source='picture' label='Url' />
    </SimpleShowLayout>
  </Show>
);

// list existing badges
export const PictureList = (props) => (
  <List
    {...props}
    title='Picture'
    actions={<CustomListActions />}
    bulkActionButtons={<CustomBulkActions />}
  >
    {/* <Datagrid expand={<ImageShow />}>
      <TextField source='description' label='Beschreibung' />
      <EditButton />
    </Datagrid> */}
    <PictureGrid />
  </List>
);

// edit badges
export const PictureEdit = (props) => (
  <Edit title='Verändere Profilbilder' {...props}>
    <SimpleForm>
      <ImageInput
        source='Picture'
        accept='image/*'
        placeholder={<p>Füge hier neue Profilbilder hinzu</p>}
      >
        <ImageField source='picture' />
      </ImageInput>
      <TextInput label='Beschreibung' source='description' />
    </SimpleForm>
  </Edit>
);

// create a new badge
export const PictureCreate = (props) => (
  <Create title='Lade Profilbilder hoch' {...props}>
    <SimpleForm>
      <ImageInput
        source='Picture'
        accept='image/*'
        placeholder={<p>Füge hier neue Profilbilder hinzu</p>}
      >
        <ImageField source='picture' />
      </ImageInput>
      <TextInput label='Beschreibung' source='description' />
    </SimpleForm>
  </Create>
);
