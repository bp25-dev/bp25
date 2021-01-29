
import React from 'react';
import {
  ImageField,
  ImageInput,
  BooleanInput,
  Edit,
  SimpleForm,
  TextInput,
} from 'react-admin';

// edit badges
export const PictureEdit = (props) => (
  <Edit title='Verändere Profilbilder' {...props}>
    <SimpleForm>
      <TextInput source='name' label='Name' fullWidth />
      <ImageInput source='ProfilePicture' accept='image/*'>
        <ImageField source='picture' />
      </ImageInput>
      <BooleanInput label='gesperrt' source='locked' />
    </SimpleForm>
  </Edit>
);
