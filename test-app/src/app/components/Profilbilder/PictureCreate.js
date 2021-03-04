
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
<<<<<<< HEAD
      <ImageInput source='ProfilePicture' accept='image/*'>
=======
      <ImageInput source='ProfilePicture' accept='image/*' placeholder={<p>Klicke hier, um ein Profilbild hinzuzufügen</p>}>
>>>>>>> anna_dev
        <ImageField source='picture' />
      </ImageInput>
      <BooleanInput label='gesperrt' source='locked' />
    </SimpleForm>
  </Create>
);
