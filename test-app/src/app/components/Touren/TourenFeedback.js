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
  // custom actions
  useListContext,
  TopToolbar,
  ExportButton,
  sanitizeListRestProps,
} from 'react-admin';
import RichTextInput from 'ra-input-rich-text';
import { makeStyles } from '@material-ui/core/styles';
import { FeedbackGrid } from './FeedbackGrid';


const useStyles = makeStyles({
  content: {
    backgroundColor: '#e4edf8', // background color of container
  },
});

//translate text into german 
export const CustomListActions = (props) => {
  const { className, exporter, filters, maxResults, ...rest } = props;
  const {
    currentSort,
    resource,
    filterValues,
    total,
  } = useListContext();
  return (
    <TopToolbar className={className} {...sanitizeListRestProps(rest)}>
      <ExportButton
        disabled={total === 0}
        resource={resource}
        sort={currentSort}
        filterValues={filterValues}
        maxResults={maxResults}
        label="Daten exportieren"
      />
    </TopToolbar>
  );
};

export const FeedbackList = (props) => {
  const classes = useStyles();
  return (
    <List {...props} title='Feedback' classes={{ content: classes.content }} actions={<CustomListActions />}>
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
