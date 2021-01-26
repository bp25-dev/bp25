import * as React from 'react';
import {
  TextField,
  ReferenceField,
  RichTextField,
  NumberField,
  List,
  useListContext,
} from 'react-admin';
import { Card, CardContent, CardHeader } from '@material-ui/core';

const cardStyle = {
  width: 300,
  minHeight: 300,
  margin: '0.5em',
  display: 'inline-block',
  verticalAlign: 'top',
};

const FeedbackGrid = () => {
  const { ids, data, basePath } = useListContext();
  return (
    <div style={{ margin: '1em' }}>
      {ids.map((id) => (
        <Card key={id} style={cardStyle}>
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
            /*  subheader={<DateField record={data[id]} source="created_at" />}
                  avatar={<Avatar icon={<PersonIcon />} />} */
          /> 
          <CardContent>  Bewertung:&nbsp;
            <NumberField record={data[id]} source='rating' label='Bewertung' />
          </CardContent>
          <CardContent> Feedback:&nbsp;
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
