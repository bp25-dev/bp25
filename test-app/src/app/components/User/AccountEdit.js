
import React from 'react';
import {
  Edit,
  SimpleForm,
  PasswordInput,
  TextInput,
  BooleanInput,
  SimpleShowLayout,
  TextField,
  BooleanField,
  Toolbar,
  SaveButton
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
      <TextField source='id' label='ID' />
      <TextField source='username' label='Benutzername' />
      <BooleanField source='Adminrechte' label='Adminrechte' />
    </SimpleShowLayout>
  );
};

export const AccountEdit = (props) => (
    <Edit title='Accountdaten ändern' {...props}>
      <SimpleForm toolbar={<UserEditToolbar />} warnWhenUnsavedChanges>
        <TextInput disabled source='id' label='ID' fullWidth />
        <TextInput source='username' label='Benutzername' fullWidth/>
        <PasswordInput source='password' label='Passwort' fullWidth/>
        <BooleanInput source='Adminrechte' label='Adminrechte erlauben?' />
        <DeleteWithCustomConfirmButton
          title={DeleteConfirmTitle}      
          content={DeleteConfirmContent}  
          label='Löschen'                 
          cancel='Abbrechen'                 
        />
      </SimpleForm>
    </Edit>
  );
  
  