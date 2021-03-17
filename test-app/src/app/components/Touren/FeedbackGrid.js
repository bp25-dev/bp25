import React from 'react';
import {
  TextField,
  ReferenceField,
  RichTextField,
  NumberField,
  useListContext,
  usePermissions,
} from 'react-admin';
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
};

export const FeedbackGrid = () => {
  const { ids, data, basePath } = useListContext();
  const classes = useStyles();
  const { permissions } = usePermissions();
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
           
          </CardActions>
        </Card>
      ))}
    </div>
  );
};
