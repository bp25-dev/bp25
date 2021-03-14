import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  ImageField,
  NumberField,
  EditButton,
  SimpleShowLayout,
  Show,
} from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';
import { CustomListActions } from '../../containers/CustomActions/CustomListActions.js';
import { CustomBulkActions } from '../../containers/CustomActions/CustomBulkActions.js';

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
const ImageShow = (props) => (
  <Show
    {...props}
    /* disable the app title change when shown */
    title=' '
    actions={false}
  >
    <SimpleShowLayout>
      <ImageField
        source='unlocked_picture'
        label='freigeschaltete Profilbilder'
      />
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
export const AbzeichenList = (props) => {
  const classes = useStyles();
  return (
    <List
      {...props}
      title='Abzeichen'
      actions={<CustomListActions />}
      bulkActionButtons={<CustomBulkActions />}
    >
      <Datagrid expand={<ImageShow />} rowClick='expand'>
        <TextField source='id' label='ID' />
        <TextField source='name' label='Name' />
        <ImageField
          className={classes.imgContainer}
          source='picture'
          label='Bild'
        />
        <NumberField source='cost' label='Kosten' />
        <EditButton label='Editieren' />
      </Datagrid>
    </List>
  );
};
