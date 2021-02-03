import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  ImageField,
  NumberField,
  EditButton,
  SimpleShowLayout,
  Show
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
      <ImageField source='picture' label='Abzeichen Bild' />
      <ImageField
        source='unlocked_picture'
        label='freigeschaltete Profilbilder'
      />
      {/* TODO: Link to actual picture table to display connectes profile pictures 
      show as a list, if there is more than one profile picture for one badge?
      <UrlField source='picture' label='Url' />
      */}

      {/*viljas change*/}
      {/*<ImageField source='picture.url' label='Bild' />
      <UrlField source='picture.url' label='Url' />
       TODO: Link to actual picture table to display connectes profile pictures 
      show as a list, if there is more than one profile picture for one badge?
      <ReferenceField
        label='freigeschaltete Profilbilder'
        source='unlocked_picture'
        reference='Profilbild'
      >
        <ImageField source='unlocked_picture.url' />
      </ReferenceField>
      <ImageField label='freigeschaltetes Bild' source='unlocked_picture.url'/>
    <UrlField source='unlocked_picture.url' label='Url' />*/}
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
  