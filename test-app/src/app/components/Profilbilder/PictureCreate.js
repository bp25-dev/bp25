
import React from 'react';
import {
  ImageField,
  ImageInput,
  BooleanInput,
  SimpleForm,
  Create,
  TextInput,
} from 'react-admin';

// create a new badge
export const PictureCreate = (props) => (
  <Create title='Lade Profilbilder hoch' {...props}>
    <SimpleForm>
      <TextInput source='name' label='Name' fullWidth />
      <ImageInput source='ProfilePicture' accept='image/*'>
        <ImageField source='picture' />
      </ImageInput>
      <BooleanInput label='gesperrt' source='locked' />
    </SimpleForm>
  </Create>
);
