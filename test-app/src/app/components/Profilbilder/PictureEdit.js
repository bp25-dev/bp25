
import React from 'react';
import {
  ImageField,
  ImageInput,
  BooleanInput,
  Edit,
  SimpleForm,
  TextInput,
  Toolbar,
  SaveButton,
  SimpleShowLayout,
  TextField,
  BooleanField
} from 'react-admin';

import DeleteWithCustomConfirmButton from 'ra-delete-with-custom-confirm-button';

const UserEditToolbar = props => (
  <Toolbar {...props} >
      <SaveButton />
  </Toolbar>
);

const DeleteConfirmTitle = 'Sind Sie sicher, dass Sie diesen Account löschen wollen?';

const DeleteConfirmContent = props => {
  return (
    <SimpleShowLayout {...props} >
       <TextField source='name' label='Name' />
       <BooleanField label='Gesperrt' source='locked' />
    </SimpleShowLayout>
  );
};

// edit badges
export const PictureEdit = (props) => (
  <Edit title='Verändere Profilbilder' {...props}>
    <SimpleForm toolbar={<UserEditToolbar />}>
      <TextInput source='name' label='Name' fullWidth />
      <ImageInput source='ProfilePicture' accept='image/*'>
        <ImageField source='picture' />
      </ImageInput>
      <BooleanInput label='gesperrt' source='locked' />
      <DeleteWithCustomConfirmButton
          title={DeleteConfirmTitle}      
          content={DeleteConfirmContent}  
          label='Löschen'                 
          cancel='Abbrechen'                 
        />
    </SimpleForm>
  </Edit>
);
