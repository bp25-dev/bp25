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
  usePermissions,
} from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';
import { CustomListActions } from '../../containers/CustomActions/CustomListActions.js';
import { CustomBulkActions } from '../../containers/CustomActions/CustomBulkActions.js';
//import {BadgeField} from '../Bilder/PictureField.js';

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
const ImageShow = (props) => (
  <Show
    {...props}
    title=' ' /* disable the app title change when shown */
    actions={false}
  >
    <SimpleShowLayout>
      <ImageField
        source='unlocked_picture'
        label='freigeschaltete Profilbilder'
      />
      {/*TODO: Link to actual picture table to display connectes profile pictures 
      show as a list, if there is more than one profile picture for one badge?
      <ReferenceField
        source='unlocked_picture'
        reference='ProfilePicture'
        label='freigeschaltete Profilbilder'
      >
        <ImageField source='picture'/>*/}
    </SimpleShowLayout>
  </Show>
);

// list existing badges
export const AbzeichenList = (props) => {
  const classes = useStyles();
  const { permissions } = usePermissions();
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
        {/*TODO: Download picture of the corresponding badge here */}
        <ImageField
          className={classes.imgContainer}
          source='picture'
          label='Bild'
        />
        {/* <BadgeField/> */}
        <NumberField source='cost' label='Kosten' />
        {permissions === 'admin' && <EditButton label='Editieren' />}
      </Datagrid>
    </List>
  );
};
