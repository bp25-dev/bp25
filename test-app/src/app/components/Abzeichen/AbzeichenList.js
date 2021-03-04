import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  ImageField,
<<<<<<< HEAD
<<<<<<< HEAD
  NumberField,
  EditButton,
  SimpleShowLayout,
  Show
} from 'react-admin';

// edit expand component
=======
  UrlField,
=======
>>>>>>> fenja_dev
  NumberField,
  EditButton,
  SimpleShowLayout,
  Show,
} from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';
import { CustomListActions } from '../CustomListActions.js';
import { CustomBulkActions } from '../CustomBulkActions.js';

const useStyles = makeStyles({
  card: {
    backgroundColor: '#e4edf8', // background color of container
  },
  imgContainer: {
    '& img': {
      height: 50,
      width: 50,
      objectFit: 'contain',
    },
  },
});

// edit expand component
/* TODO: Link to actual picture table to display connectes profile pictures 
      show as a list, if there is more than one profile picture for one badge? */
>>>>>>> anna_dev
const ImageShow = (props) => (
  <Show
    {...props}
    /* disable the app title change when shown */
    title=' '
    actions={false}
  >
    <SimpleShowLayout>
<<<<<<< HEAD
      {/* TODO: Show URL & image of related picture*/}
      <ImageField source='picture' label='Abzeichen Bild' />
=======
>>>>>>> anna_dev
      <ImageField
        source='unlocked_picture'
        label='freigeschaltete Profilbilder'
      />
<<<<<<< HEAD
      {/* TODO: Link to actual picture table to display connectes profile pictures 
      show as a list, if there is more than one profile picture for one badge?
      <UrlField source='picture' label='Url' />
      */}

=======
>>>>>>> anna_dev
      {/*viljas change*/}
      {/*<ImageField source='picture.url' label='Bild' />
      <UrlField source='picture.url' label='Url' />
       TODO: Link to actual picture table to display connectes profile pictures 
      show as a list, if there is more than one profile picture for one badge?
      <ReferenceField
        label='freigeschaltete Profilbilder'
        source='unlocked_picture'
        reference='Profilbild'
      >
        <ImageField source='unlocked_picture.url' />
      </ReferenceField>
      <ImageField label='freigeschaltetes Bild' source='unlocked_picture.url'/>
    <UrlField source='unlocked_picture.url' label='Url' />*/}
    </SimpleShowLayout>
  </Show>
);

// list existing badges
<<<<<<< HEAD
export const AbzeichenList = (props) => (
=======
export const AbzeichenList = (props) => {
  const classes = useStyles();
  return (
<<<<<<< HEAD
>>>>>>> anna_dev
    <List {...props} title='Abzeichen'>
      <Datagrid expand={<ImageShow />}>
=======
    <List
      {...props}
      title='Abzeichen'
      actions={<CustomListActions />}
      bulkActionButtons={<CustomBulkActions />}
    >
      <Datagrid expand={<ImageShow />} rowClick='expand'>
>>>>>>> fenja_dev
        <TextField source='id' label='ID' />
        <TextField source='name' label='Name' />
<<<<<<< HEAD
        <TextField source='picture' />
=======
        <ImageField
          className={classes.imgContainer}
          source='picture'
          label='Bild'
        />
>>>>>>> anna_dev
        <NumberField source='cost' label='Kosten' />
        <EditButton label='Editieren' />
      </Datagrid>
    </List>
  );
<<<<<<< HEAD
  
=======
};
>>>>>>> anna_dev
