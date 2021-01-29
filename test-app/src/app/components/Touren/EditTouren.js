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
} from 'react-admin';

// create a range withing the Difficulty can be selected
const validateDifficulty = [number(), minValue(1), maxValue(5)];

// edit a tour
export const TourenEdit = (props) => (
    <Edit title='Bearbeite Touren' {...props}>
      <SimpleForm warnWhenUnsavedChanges>
        <TextInput disabled source='ID' label='ID' fullWidth/>
        <TextInput source='name' label='Titel' fullWidth/>
        <TextInput source='description' label='Beschreibung' fullWidth/>
        <ReferenceInput source='user' reference='Benutzer' label='Ersteller' fullWidth>
          <SelectInput optionText='username' />
        </ReferenceInput>
        <ReferenceArrayInput source='user' reference='Benutzer' fullWidth>
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
        <ArrayInput source='Stationen'>
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
      </SimpleForm>
    </Edit>
  );
  