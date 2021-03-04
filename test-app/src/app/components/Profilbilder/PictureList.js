import React from 'react';
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
import { makeStyles } from '@material-ui/core/styles';
import { linkToRecord } from 'ra-core';
import { Link } from 'react-router-dom';

// style of different card entries
const useStyles = makeStyles({
  div: {
    margin: '1em',
  },
  card: {
    width: 300,
    height: 500,
    margin: '0.5em',
    display: 'inline-block',
    verticalAlign: 'top',
  },
  link: {
    minHeight: 45,
    fontSize: 12,
  },
  actions: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
});

// show the pictures on a grid
const PictureGrid = () => {
  const { ids, data, basePath } = useListContext();
  const classes = useStyles();
  return (
    <div className={classes.div}>
      {ids.map((id) => (
        <Card key={id} className={classes.card}>
          <CardActionArea>
          <CardHeader />
          <CardContent>
            Profilbild:&nbsp;
            <ImageField record={data[id]} source='picture' />
          </CardContent>
          <CardContent className={classes.link}>
            Link:&nbsp;
            <UrlField record={data[id]} source='picture' />
          </CardContent>
          <CardContent>
            Status:&nbsp;
            <BooleanField record={data[id]} source='locked' />
          </CardContent>
          </CardActionArea>
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
>>>>>>> anna_dev
  </List>
);
