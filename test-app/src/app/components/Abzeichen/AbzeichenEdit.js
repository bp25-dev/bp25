import React from 'react';
import {
  ImageField,
  ImageInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  Edit,
  SimpleForm,
  TextInput, 
  Toolbar,
  SaveButton,
  SimpleShowLayout,
  TextField,
} from 'react-admin';

import DeleteWithCustomConfirmButton from 'ra-delete-with-custom-confirm-button';

const UserEditToolbar = props => (
  <Toolbar {...props} >
      <SaveButton />
  </Toolbar>
);

const DeleteConfirmTitle = 'Sind Sie sicher, dass Sie dieses ABzeichen löschen wollen?';

const DeleteConfirmContent = props => {
  return (
    <SimpleShowLayout {...props} >
      <TextField disabled source='id' label='ID' />
      <TextField source='name' label='Name' />
    </SimpleShowLayout>
  );
};

// edit badges
export const AbzeichenEdit = (props) => (
    <Edit title='Verändere Verknüpfung' {...props}>
      <SimpleForm toolbar={<UserEditToolbar />} >
        <TextInput disabled source='id' label='ID' fullWidth />
        <TextInput source='name' label='Name' fullWidth/>
        {/* Select a new picture for the badge*/}
        <ImageInput source='Abzeichen' accept='image/*' placeholder={<p>Füge hier ein Bild von dem Abzeichen hinzu</p>}>
          <ImageField source='picture' />
        </ImageInput>
        {/* TODO: Link to connected profile pictures and select by existing name/picture
         (new profile pictures have to be added in the ProfilePicture database)*/}
        <ReferenceInput
          source='unlocked_picture'
          reference='ProfilePicture'
          label='freigeschaltete Profilbilder'
        >
          <SelectInput source='picture' />
        </ReferenceInput>
        <NumberInput source='cost' label='Kosten' />
        <DeleteWithCustomConfirmButton
          title={DeleteConfirmTitle}      
          content={DeleteConfirmContent}  
          label='Löschen'                 
          cancel='Abbrechen'                 
        />
      </SimpleForm>
    </Edit>
  );