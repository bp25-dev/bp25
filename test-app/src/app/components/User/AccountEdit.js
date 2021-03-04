
import React from 'react';
import {
  Edit,
  SimpleForm,
  PasswordInput,
  TextInput,
  BooleanInput,
<<<<<<< HEAD
} from 'react-admin';

export const AccountEdit = (props) => (
    <Edit title='Accountdaten ändern' {...props}>
      <SimpleForm>
=======
  SimpleShowLayout,
  TextField,
  BooleanField,
  ReferenceInput,
  SelectInput,
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
>>>>>>> anna_dev
        <TextInput disabled source='id' label='ID' fullWidth />
        <TextInput source='username' label='Benutzername' fullWidth/>
        <PasswordInput source='password' label='Passwort' fullWidth/>
        <BooleanInput source='Adminrechte' label='Adminrechte erlauben?' />
<<<<<<< HEAD
=======
        <DeleteWithCustomConfirmButton
          title={DeleteConfirmTitle}      
          content={DeleteConfirmContent}  
          label='Löschen'                 
          cancel='Abbrechen'                 
        />
<<<<<<< HEAD
        <ReferenceInput
        source='username'
        label='Erstellte Touren'
        reference='Touren'
      >
        <SelectInput optionText='name' />
      </ReferenceInput> 
>>>>>>> anna_dev
=======
>>>>>>> fenja_dev
      </SimpleForm>
    </Edit>
  );
  
  