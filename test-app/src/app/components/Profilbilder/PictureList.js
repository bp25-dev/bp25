import React from 'react';
import {
  List,
  UrlField,
  Filter,
  SearchInput,
  NullableBooleanInput,
  ImageField,
  BooleanField,
  useListContext,
} from 'react-admin';
import { Card, CardContent, CardHeader } from '@material-ui/core';

// style of different card entries
const cardStyle = {
  width: 300,
  minHeight: 300,
  margin: '0.5em',
  display: 'inline-block',
  verticalAlign: 'top',
};

// show the pictures on a grid
const PictureGrid = () => {
  const { ids, data, basePath } = useListContext();
  return (
    <div style={{ margin: '1em' }}>
      {ids.map((id) => (
        <Card key={id} style={cardStyle}>
          <CardHeader />
          <CardContent>
            Profilbild:&nbsp;
            <ImageField record={data[id]} source='picture' />
          </CardContent>
          <CardContent>
            Link:&nbsp;
            <UrlField record={data[id]} source='picture' />
          </CardContent>
          <CardContent>
            Status:&nbsp;
            <BooleanField record={data[id]} source='locked' />
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

const FilterBar = (props) => (
  <div>
    <Filter {...props} >
      <SearchInput source='q' alwaysOn />
      <NullableBooleanInput
        label='Gesperrt'
        source='locked'
        nullLabel='alle'
        falseLabel='frei'
        trueLabel='gesperrt'
        alwaysOn
      />
    </Filter>
  </div>
);
// list existing badges
export const PictureList = (props) => (
  <List {...props} 
  title='Abzeichen' 
  filters={<FilterBar />} >
    <PictureGrid />
  </List>
);
