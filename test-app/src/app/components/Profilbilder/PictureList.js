import React from 'react';
import {
  List,
  Datagrid,
  UrlField,
  ImageField,
  BooleanField,
  EditButton,
  SimpleShowLayout,
  Show,
  TextField
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
export const PictureList = (props) => (
  <List {...props} title='Abzeichen'>
    <Datagrid expand={<ImageShow />}>
      <TextField source='name' label='Name' />
      <BooleanField source='locked' label='gesperrt' />
      <EditButton />
    </Datagrid>
  </List>
);
