import React from 'react';
import { List, Filter, SearchInput, NullableBooleanInput } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';
import { CustomListActions } from '../../containers/CustomActions/CustomListActions.js';
import { CustomBulkActions } from '../../containers/CustomActions/CustomBulkActions.js';
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
export const ProfilePictureList = (props) => {
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
