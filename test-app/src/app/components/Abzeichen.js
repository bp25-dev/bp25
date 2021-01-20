import React from 'react';
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
  SelectInput,
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
      {/* TODO: Show URL & image of related picture*/}
      <ImageField source='picture.url' label='Bild' />
      <UrlField source='picture.url' label='Url' />
      {/* TODO: Link to actual picture table to display connectes profile pictures 
      show as a list, if there is more than one profile picture for one badge?*/}
      {/*<ReferenceField
        label='freigeschaltete Profilbilder'
        source='unlocked_picture'
        reference='Profilbild'
      >
        <ImageField source='unlocked_picture.url' />
      </ReferenceField>*/}
      <ImageField label='freigeschaltetes Bild' source='unlocked_picture.url'/>
      <UrlField source='unlocked_picture.url' label='Url' />
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
      {/* Select a new picture for the badge*/}
      <ImageInput source='Badge' accept='image/*'>
        <ImageField source='picture' />
      </ImageInput>
      {/* TODO: Link to connected profile pictures and select by existing name/picture
       (new profile pictures have to be added in the ProfilePicture database)*/}
      <ReferenceInput
        label='freigeschaltete Profilbilder'
        source='unlocked_picture'
        reference='ProfilePicture'
      >
        <SelectInput source='picture' />
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
      {/* TODO: Link to connected profile pictures and select by existing name/picture
       (new profile pictures have to be added in the ProfilePicture database)*/}
      <ReferenceInput
        label='freigeschaltete Profilbilder'
        source='unlocked_picture'
        reference='ProfilePicture'
      >
        <SelectInput source='picture' />
      </ReferenceInput>
      <NumberInput source='cost' label='Kosten' />
    </SimpleForm>
  </Create>
);