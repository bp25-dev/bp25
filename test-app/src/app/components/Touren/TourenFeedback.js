import React from 'react';
import {
  List,
  Edit,
  SimpleForm,
  Toolbar,
  SaveButton,
  SimpleShowLayout,
  //edit
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
  TextField,
  //validation
  minValue,
  maxValue,
  number,
} from 'react-admin';
import RichTextInput from 'ra-input-rich-text';
import { makeStyles } from '@material-ui/core/styles';
import { FeedbackGrid } from './FeedbackGrid';
import { CustomBulkActions } from '../CustomBulkActions.js';
import { CustomListActionsExport } from '../CustomListActions.js';
import DeleteWithCustomConfirmButton from 'ra-delete-with-custom-confirm-button';

const UserEditToolbar = (props) => (
  <Toolbar {...props}>
    <SaveButton label='Speichern'/>
  </Toolbar>
);

const DeleteConfirmContent = (props) => {
  return (
    <SimpleShowLayout {...props}>
      <TextField source='_id' label='Objekt ID' />
      <TextField source='title' label='Titel' />
      <TextField source='category' label='Kategorie' />
      <TextField source='year' label='Jahr' />
      <TextField source='art_type' label='Kunsttyp' />
      <TextField source='creator' label='Ersteller' />
    </SimpleShowLayout>
  );
};

const useStyles = makeStyles({
  content: {
    backgroundColor: '#e4edf8', // background color of container
  },
});

export const FeedbackList = (props) => {
  const classes = useStyles();
  return (
    <List
      {...props}
      title='Feedback'
      classes={{ content: classes.content }}
      actions={<CustomListActionsExport />}
      bulkActionButtons={<CustomBulkActions />}
    >
      <FeedbackGrid />
    </List>
  );
};

// create a range withing the rating can be selected
const validateRating = [
  number(),
  minValue(1, 'Bitte wähle eine Zahl zwischen 1 und 10'),
  maxValue(10, 'Bitte wähle eine Zahl zwischen 1 und 10'),
];

export const FeedbackEdit = (props) => (
  <Edit {...props} title='Bearbeite Feedback'>
    <SimpleForm  toolbar={<UserEditToolbar />} warnWhenUnsavedChanges>
      <TextInput disabled source='ID' label='ID' />
      <ReferenceInput
        source='tour.$oid'
        reference='Touren'
        label='Tour Referenz'
      >
        <SelectInput optionText='name' />
      </ReferenceInput>
      <NumberInput
        source='rating'
        label='Bewertung'
        validate={validateRating}
      />
      <RichTextInput source='review' label='Rezension' />
      <DeleteWithCustomConfirmButton
          title={ 'Sind Sie sicher, dass Sie dieses Exponat löschen wollen?'}
          content={DeleteConfirmContent}
          label='Löschen'
          cancel='Abbrechen'
        />
    </SimpleForm>
  </Edit>
);
