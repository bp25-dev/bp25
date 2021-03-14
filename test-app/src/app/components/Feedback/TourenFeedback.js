import React from 'react';
import {
  List,
  //edit
  NumberInput,
  TextInput,
  ReferenceInput,
  Edit,
  SimpleForm,
  SelectInput,
  //validation
  minValue,
  maxValue,
  number,
} from 'react-admin';
import { FeedbackGrid } from './FeedbackGrid';
import { CustomBulkActions } from '../../containers/CustomActions/CustomBulkActions.js';
import { CustomListActionsExport } from '../../containers/CustomActions/CustomListActions.js';
import RichTextInput from 'ra-input-rich-text';
import { makeStyles } from '@material-ui/core/styles';

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
    <SimpleForm warnWhenUnsavedChanges>
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
    </SimpleForm>
  </Edit>
);
