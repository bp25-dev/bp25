import React from 'react';
import {
  TextField,
  ReferenceField,
  RichTextField,
  NumberField,
  useListContext,
<<<<<<< HEAD:test-app/src/app/components/Touren/Tour_Feedback.js
} from 'react-admin';
import { Card, CardContent, CardHeader } from '@material-ui/core';

const cardStyle = {
  width: 300,
  minHeight: 300,
  margin: '0.5em',
  display: 'inline-block',
  verticalAlign: 'top',
=======
  EditButton,
} from 'react-admin';
import { linkToRecord } from 'ra-core';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardActions } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/icons/Stars';

const useStyles = makeStyles({
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
>>>>>>> fenja_dev:test-app/src/app/components/Touren/FeedbackGrid.js
};

export const FeedbackGrid = () => {
  const { ids, data, basePath } = useListContext();
  return (
    <div style={{ margin: '1em' }}>
      {ids.map((id) => (
<<<<<<< HEAD:test-app/src/app/components/Touren/Tour_Feedback.js
        <Card key={id} style={cardStyle}>
=======
        <Card key={id} className={classes.card}>
>>>>>>> fenja_dev:test-app/src/app/components/Touren/FeedbackGrid.js
          <CardHeader
            title={
              <ReferenceField
                label='Tour'
                resource='Feedback'
                record={data[id]}
                source='tour'
                reference='Touren'
                basePath={basePath}
              >
                <TextField source='name' />
              </ReferenceField>
            }
<<<<<<< HEAD:test-app/src/app/components/Touren/Tour_Feedback.js
            /*  subheader={<DateField record={data[id]} source="created_at" />}
                  avatar={<Avatar icon={<PersonIcon />} />} */
          /> 
          <CardContent>  Bewertung:&nbsp;
            <NumberField record={data[id]} source='rating' label='Bewertung' />
          </CardContent>
          <CardContent> Feedback:&nbsp;
=======
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
>>>>>>> fenja_dev:test-app/src/app/components/Touren/FeedbackGrid.js
            <RichTextField
              record={data[id]}
              source='review'
              label='Rezension'
            />
          </CardContent>
<<<<<<< HEAD:test-app/src/app/components/Touren/Tour_Feedback.js
=======
          <CardActions className={classes.actions}>
            <EditButton
              label = 'Editieren'
              to={linkToRecord(basePath, data[id].id)}
              component={Link}
              variant='outlined'
              color='primary'
            />
          </CardActions>
>>>>>>> fenja_dev:test-app/src/app/components/Touren/FeedbackGrid.js
        </Card>
      ))}
    </div>
  );
};
<<<<<<< HEAD:test-app/src/app/components/Touren/Tour_Feedback.js

export const FeedbackList = (props) => (
  <List {...props} title='Feedback'>
    <FeedbackGrid />
  </List>
);
=======
>>>>>>> fenja_dev:test-app/src/app/components/Touren/FeedbackGrid.js
