import React from 'react';
import { Fragment } from 'react';
import {
  List,
  Datagrid,
  TextField,
  UrlField,
  ImageField,
  NumberField,
  ReferenceField,
  ImageInput,
  NumberInput,
  ReferenceInput,
  EditButton,
  Edit,
  SimpleForm,
  TextInput,
  Create,
  SimpleShowLayout,
  Show,
} from 'react-admin';

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
export const AbzeichenList = (props) => (
  <List {...props} title='Abzeichen'>
    <Datagrid expand={<ImageShow />}>
      <TextField source='id' label='ID' />
      <TextField source='name' label='Name' />
      <TextField source='picture' />
      <ReferenceField
        label='freigeschaltet'
        source='unlocked_picture'
        reference='Profilbild'
      >
        <ImageField source='picture' />
      </ReferenceField>
      <NumberField source='cost' label='Kosten' />
      <EditButton />
    </Datagrid>
  </List>
);

// edit badges
export const AbzeichenEdit = (props) => (
  <Edit title='Verändere Verknüpfung' {...props}>
    <SimpleForm>
      <TextInput disabled source='id' />
      <TextInput source='name' label='Name' />
      <ImageInput source='Badge' accept='image/*'>
        <ImageField source='picture' />
      </ImageInput>
      <ReferenceInput
        label='freigeschaltet'
        source='unlocked_picture'
        reference='ProfilePicture'
      >
        <ImageInput source='picture' />
      </ReferenceInput>
      <NumberInput source='cost' label='Kosten' />
    </SimpleForm>
  </Edit>
);

// create a new badge
export const AbzeichenCreate = (props) => (
  <Create title='Lade Abzeichen hoch' {...props}>
    <SimpleForm>
      <TextInput disabled source='id' />
      <TextInput source='name' label='Name' />
      <ImageInput source='Badge' accept='image/*'>
        <ImageField source='picture' />
      </ImageInput>
      <ReferenceInput
        label='freigeschaltet'
        source='unlocked_picture'
        reference='ProfilePicture'
      >
        <ImageInput source='picture' />
      </ReferenceInput>
      <NumberInput source='cost' label='Kosten' />
    </SimpleForm>
  </Create>
);
