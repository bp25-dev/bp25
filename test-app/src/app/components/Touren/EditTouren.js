import React from 'react';
import {
  Edit,
  TabbedForm,
  FormTab,
  Toolbar,
  SimpleShowLayout,
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
  DateInput,
  TextInput,
  // custom buttons
  SaveButton,
} from 'react-admin';
import {
  QuestionInput,
  AnswerInput,
  MultipleChoiceQuestionInput,
  MultipleChoiceAnswerInput,
} from './Stationen';
import DeleteWithCustomConfirmButton from 'ra-delete-with-custom-confirm-button';
import { QuestionField } from './Stationen.js';

const UserEditToolbar = (props) => (
  <Toolbar {...props}>
    <SaveButton label='Speichern' />
  </Toolbar>
);

const DeleteConfirmTitle =
  'Sind Sie sicher, dass Sie diese Tour löschen wollen?';

const DeleteConfirmContent = (props) => {
  return (
    <SimpleShowLayout {...props}>
      <TextField disabled source='ID' label='ID' fullWidth />
      <TextField source='name' label='Titel' fullWidth />
      <TextField source='description' label='Beschreibung' fullWidth />
      <TextField source='search_id' label='Touren Code' fullWidth />
    </SimpleShowLayout>
  );
};

// create a range withing the Difficulty can be selected
const validateDifficulty = [
  number(),
  minValue(1, 'Bitte wähle eine Zahl zwischen 1 und 5'),
  maxValue(5, 'Bitte wähle eine Zahl zwischen 1 und 5'),
];

// edit a tour
export const TourenEdit = (props) => (
  <Edit title='Bearbeite Touren' {...props} successMessage="Die Änderungen wurden gespeichert" >
    <TabbedForm toolbar={<UserEditToolbar />} warnWhenUnsavedChanges>
      <FormTab label='Informationen'>
        <TextInput disabled source='ID' label='ID' fullWidth />
        <TextInput source='name' label='Titel' fullWidth />
        <TextInput source='description' label='Beschreibung' fullWidth />
        <ReferenceInput
          disabled
          source='user'
          reference='Benutzer'
          label='Ersteller'
          fullWidth
        >
          <SelectInput optionText='username' />
        </ReferenceInput>
        <ReferenceArrayInput
          disabled
          source='user'
          reference='Benutzer'
          fullWidth
        >
          <SelectArrayInput optionText='username' />
        </ReferenceArrayInput>
        <TextInput source='search_id' label='Touren Code' fullWidth />
        <TextInput source='session_id' label='Passwort' fullWidth />
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
      </FormTab>
      <FormTab label='Stationen'>
      </FormTab>
      <DeleteWithCustomConfirmButton
          title={DeleteConfirmTitle}
          content={DeleteConfirmContent}
          label='Löschen'
          cancel='Abbrechen'
        />
    </TabbedForm>
  </Edit>
);
