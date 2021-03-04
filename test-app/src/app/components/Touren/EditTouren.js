import React from 'react';
import {
  Edit,
  SimpleForm,
  //options
  SimpleFormIterator,
  //validation
  minValue,
  maxValue,
  number,
  //fields
  TextField,
  //inputs
  SelectInput,
  ImageInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  NumberInput,
  ArrayInput,
  BooleanInput,
  DateInput,
  TextInput,
<<<<<<< HEAD
} from 'react-admin';

// create a range withing the Difficulty can be selected
const validateDifficulty = [number(), minValue(1), maxValue(5)];
=======
  Toolbar,
  SaveButton,
  SimpleShowLayout,
  BooleanField,
} from 'react-admin';
import DeleteWithCustomConfirmButton from 'ra-delete-with-custom-confirm-button';

const UserEditToolbar = props => (
  <Toolbar {...props} >
      <SaveButton />
  </Toolbar>
);

const DeleteConfirmTitle = 'Sind Sie sicher, dass Sie diese Tour löschen wollen?';

const DeleteConfirmContent = props => {
  return (
    <SimpleShowLayout {...props} >
      <TextField disabled source='ID' label='ID' fullWidth/>
      <TextField source='name' label='Titel' fullWidth/>
      <TextField source='description' label='Beschreibung' fullWidth/>
      <TextField source='search_id' label='Touren Code' fullWidth/>
    </SimpleShowLayout>
  );
};

// create a range withing the Difficulty can be selected
const validateDifficulty = [number(), minValue(1, 'Bitte wähle eine Zahl zwischen 1 und 5'), maxValue(5, 'Bitte wähle eine Zahl zwischen 1 und 5')];
>>>>>>> anna_dev

// edit a tour
export const TourenEdit = (props) => (
    <Edit title='Bearbeite Touren' {...props}>
<<<<<<< HEAD
      <SimpleForm warnWhenUnsavedChanges>
        <TextInput disabled source='ID' label='ID' fullWidth/>
        <TextInput source='name' label='Titel' fullWidth/>
        <TextInput source='description' label='Beschreibung' fullWidth/>
        <ReferenceInput source='user' reference='Benutzer' label='Ersteller' fullWidth>
          <SelectInput optionText='username' />
        </ReferenceInput>
        <ReferenceArrayInput source='user' reference='Benutzer' fullWidth>
=======
      <SimpleForm toolbar={<UserEditToolbar />} warnWhenUnsavedChanges>
        <TextInput disabled source='ID' label='ID' fullWidth/>
        <TextInput source='name' label='Titel' fullWidth/>
        <TextInput source='description' label='Beschreibung' fullWidth/>
        <ReferenceInput disabled source='user' reference='Benutzer' label='Ersteller' fullWidth>
          <SelectInput optionText='username' />
        </ReferenceInput>
        <ReferenceArrayInput disabled source='user' reference='Benutzer' fullWidth>
>>>>>>> anna_dev
          <SelectArrayInput optionText='username' />
        </ReferenceArrayInput>
        <TextInput source='search_id' label='Touren Code' fullWidth/>
        <TextInput source='session_id' label='Passwort' fullWidth/>
        <DateInput
          source='lastEdit'
          label='letzte Bearbeitung'
          options={{ format: 'DD/MM/YYYY' }}
        />
        <NumberInput
          source='difficulty'
          label='Schwierigkeitsgrad'
          validate={validateDifficulty}
        />
        <SelectInput
          source='Status'
          choices={[
            { id: 'freigegeben', name: 'freigegeben' },
            { id: 'ausstehend', name: 'ausstehend' },
            { id: 'privat', name: 'privat' },
          ]}
        />
        {/*  TODO: model the different stations and translate them into edit Inputs*/}
<<<<<<< HEAD
        <ArrayInput source='Stationen'>
=======
        <ArrayInput disabled source='Stationen' fullWidth>
>>>>>>> anna_dev
          <SimpleFormIterator>
            <TextField source='Objekt' />
            <BooleanInput source='Foto' />
            <BooleanInput source='Text' />
            <BooleanInput source='Details' />
            <TextInput source='Textfeld' />
            <ArrayInput source='Fragen'>
              <SimpleFormIterator>
                <TextInput source='Antwort' />
                <BooleanInput source='Antwort' />
              </SimpleFormIterator>
            </ArrayInput>
            <ImageInput source='Bild' />
          </SimpleFormIterator>
        </ArrayInput>
<<<<<<< HEAD
=======
        <DeleteWithCustomConfirmButton
          title={DeleteConfirmTitle}      
          content={DeleteConfirmContent}  
          label='Löschen'                 
          cancel='Abbrechen'                 
        />
>>>>>>> anna_dev
      </SimpleForm>
    </Edit>
  );
  