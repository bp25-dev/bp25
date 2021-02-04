import * as React from 'react';
import {
  TextField,
  ReferenceField,
  RichTextField,
  NumberField,
  List,
  Link, 
  useListContext,
} from 'react-admin';
import { Card, CardContent, CardHeader } from '@material-ui/core';
import Icon from '@material-ui/icons/Stars';

const cardStyle = {
  width: 300,
  minHeight: 300,
  margin: '0.5em',
  display: 'inline-block',
  verticalAlign: 'top',
};

const StarRatingField = ({ record }) => (
  <span>
    {Array(record.rating)
      .fill(true)
      .map((_, i) => (
        <Icon key={i} style={{ opacity: 0.87, width: 20, height: 20 }} />
      ))}
  </span>
);

const FeedbackGrid = () => {
  const { ids, data, basePath } = useListContext();
  return (
    <div style={{ margin: '1em' }}>
      {ids.map((id) => (
        <Card key={id} style={cardStyle}>
          <CardHeader
            title={
              <ReferenceField reference='Touren' source='tour.$oid' label='Tourname'>
                <TextField source='name' />
              </ReferenceField> 

            }
            /*subheader={...}
             avatar={<Avatar icon={<PersonIcon />} />}   */
          />
          <CardContent>
            {' '}
            Bewertung:&nbsp;
            <NumberField record={data[id]} source='rating' label='Bewertung' />
            /10 <br />
            <StarRatingField
              record={data[id]}
              source='rating'
              label='Bewertung'
            />
          </CardContent>

          <CardContent>
            {' '}
            Test:&nbsp;
            <TextField record={data[id]} source='tour.$oid' /> 
          </CardContent>

          {/* <CardContent>
            {' '}
            TestRef:&nbsp;
            <ReferenceField record={data[id]} source='tour.$oid' reference='Touren' label='Tourname'>
                <TextField record={data[id]} source='name' />
              </ReferenceField> 
          </CardContent> */}

          <CardContent>
            {' '}
            Feedback:&nbsp;
            <RichTextField
              record={data[id]}
              source='review'
              label='Rezension'
            />
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export const FeedbackList = (props) => (
  <List {...props} title='Feedback'>
        <FeedbackGrid />
  </List>
);
