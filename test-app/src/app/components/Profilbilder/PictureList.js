import React from 'react';
<<<<<<< HEAD
import {
  List,
<<<<<<< HEAD
  Datagrid,
  UrlField,
  ImageField,
  BooleanField,
  EditButton,
  SimpleShowLayout,
  Show,
  TextField
} from 'react-admin';

// edit expand component
const ImageShow = (props) => (
  <Show
    {...props}
    /* disable the app title change when shown */
    title=' '
  >
    <SimpleShowLayout>
      <ImageField source='picture' />
      <UrlField source='picture' label='Url' />
    </SimpleShowLayout>
  </Show>
);

// list existing badges
export const PictureList = (props) => (
  <List {...props} title='Abzeichen'>
    <Datagrid expand={<ImageShow />}>
      <TextField source='name' label='Name' />
      <BooleanField source='locked' label='gesperrt' />
      <EditButton />
    </Datagrid>
=======
  UrlField,
  Filter,
  SearchInput,
  NullableBooleanInput,
  ImageField,
  BooleanField,
  useListContext,
  EditButton,
  //edit
  NumberInput,
  TextInput,
  ReferenceInput,
  Edit,
  SimpleForm,
  SelectInput,
} from 'react-admin';
import { Card, CardContent, CardHeader, CardActions, CardActionArea } from '@material-ui/core';
=======
import { List, Filter, SearchInput, NullableBooleanInput } from 'react-admin';
>>>>>>> fenja_dev
import { makeStyles } from '@material-ui/core/styles';
import { CustomListActions } from '../CustomListActions.js';
import { CustomBulkActions } from '../CustomBulkActions.js';
import { ProfilePictureGrid } from './ProfilePictureGrid';

const useStyles = makeStyles({
  content: {
    backgroundColor: '#e4edf8', // background color of container
  },
});

const FilterBar = (props) => (
  <div>
    <Filter {...props}>
      <SearchInput source='q' alwaysOn placeholder='Suche' />
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
<<<<<<< HEAD
export const PictureList = (props) => (
  <List {...props} 
  title='Abzeichen' 
  filters={<FilterBar />} >
    <PictureGrid />
>>>>>>> anna_dev
  </List>
);
=======
export const PictureList = (props) => {
  const classes = useStyles();
  return (
    <List
      {...props}
      title='Abzeichen'
      filters={<FilterBar />}
      classes={{ content: classes.content }}
      actions={<CustomListActions />}
      bulkActionButtons={<CustomBulkActions />}
    >
      <ProfilePictureGrid />
    </List>
  );
};
>>>>>>> fenja_dev
