import * as React from 'react';
import {
  TextField,
  ReferenceField,
  RichTextField,
  NumberField,
  List,
  useListContext,
  EditButton,
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
import RichTextInput from 'ra-input-rich-text';
import { Card, CardContent, CardHeader, CardActions } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { linkToRecord } from 'ra-core';
import { Link } from 'react-router-dom';

import Icon from '@material-ui/icons/Stars';

const useStyles = makeStyles({
  content: {
    backgroundColor: '#e4edf8', // background color of container
  },
  div: {
    margin: '1em', // spacing between cards
  },
  // card styles
  card: {
    width: 300,
    height: 350,
    margin: '0.5em',
    display: 'inline-block',
    verticalAlign: 'top',
    textDecoration: 'none',
  },
  actions: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  // styling for custom star field
  icon: {
    opacity: 0.87,
    width: 20,
    height: 20,
  },
});

const StarRatingField = ({ record }) => {
  const classes = useStyles();
  return (
    <span>
      {Array(record.rating)
        .fill(true)
        .map((_, i) => (
          <Icon key={i} className={classes.icon} />
        ))}
    </span>
  );
};

const FeedbackGrid = () => {
  const { ids, data, basePath } = useListContext();
  const classes = useStyles();
  return (
    <div className={classes.div}>
      {ids.map((id) => (
        <Card key={id} className={classes.card}>
          <CardHeader
            title={
              <ReferenceField
                source='tour.$oid'
                reference='Touren'
                label='Tourname'
              >
                <TextField source='name' />
              </ReferenceField>
            }
            title='Tour Referenz'
          />
          <CardContent>
            Bewertung:&nbsp;
            <NumberField record={data[id]} source='rating' label='Bewertung' />
            /10 <br />
            <StarRatingField
              record={data[id]}
              source='rating'
              label='Bewertung'
            />
          </CardContent>
          {/* <CardContent>
            TestRef:&nbsp;
            <ReferenceField record={data[id]} source='tour.$oid' reference='Touren' label='Tourname'>
                <TextField source='name' />
              </ReferenceField> 
          </CardContent> */}
          <CardContent>
            Feedback:&nbsp;
            <RichTextField
              record={data[id]}
              source='review'
              label='Rezension'
            />
          </CardContent>
          <CardActions className={classes.actions}>
            <EditButton
              to={linkToRecord(basePath, data[id].id)}
              component={Link}
              variant='outlined'
              color='primary'
            />
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export const FeedbackList = (props) => {
  const classes = useStyles();
  return (
    <List {...props} title='Feedback' classes={{ content: classes.content }}>
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
