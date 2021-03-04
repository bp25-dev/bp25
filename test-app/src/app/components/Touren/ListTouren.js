import React from 'react';
import {
  List,
  Datagrid,
  SingleFieldList,
  //options
  EditButton,
  Show,
  SimpleShowLayout,
  //fields
  TextField,
  DateField,
  NumberField,
  ChipField,
  ArrayField,
} from 'react-admin';
import {
  QuestionField,
  AnswerField,
  MultipleChoiceQuestionField,
  MultipleChoiceAnswerField,
} from './Stationen';
import { FilterBar } from './TourenFilter';
import { makeStyles } from '@material-ui/core/styles';
import { CustomListActions } from '../CustomListActions.js';
import { CustomBulkActions } from '../CustomBulkActions.js';

//edit expand component
//TODO: get information about stations (from the video) and model them
const StationShow = (props) => (
  <Show
    {...props}
    /* disable the app title change when shown */
    title=''
    actions={false}
  >
    <SimpleShowLayout>
      <ArrayField source='Stationen'>
        <Datagrid>
          <QuestionField />
        </Datagrid>
      </ArrayField>
    </SimpleShowLayout>
  </Show>
);

// margin to divide filterBar from list
const useStyles = makeStyles({
  main: {
    marginTop: 20,
  },
});

// change each second row to light blue
const postRowStyle = (record, index) => ({
  backgroundColor: index % 2 ? 1 : '#e4edf8',
});

// list existing tours
export const TourenList = (props) => {
  const classes = useStyles(props);
  return (
    <List
      {...props}
      title='Touren'
      filters={<FilterBar />}
      actions={<CustomListActions />}
      bulkActionButtons={<CustomBulkActions />}
      classes={{ main: classes.main }}
    >
      <Datagrid
        rowClick='expand'
        expand={<StationShow />}
        rowStyle={postRowStyle}
      >
        {/* TODO: Whats the primaery key? replace Titel for pk or use built in  
        dont show id for user study 
        <TextField source='_id' label='ID' />*/}
        <TextField source='name' label='Titel' />
        <TextField source='description' label='Beschreibung' />
        {/* <ReferenceArrayField
          label='Benutzer'
          reference='Benutzer'
          source='user.username'
        >
          <SingleFieldList>
            <ChipField source='username' />
          </SingleFieldList>
        </ReferenceArrayField>
        <ReferenceField source='owner' reference='Benutzer' label='Ersteller'>
          <ChipField source='username' />
        </ReferenceField> */}
        {/* created fields for user study */}
        <TextField source='owner.username' label='Ersteller' />
        <ArrayField source='user' label='beteiligte Benutzer'>
          <SingleFieldList>
            <ChipField source='username' />
          </SingleFieldList>
        </ArrayField>
        {/* end of created fields for user study */}
        <TextField source='search_id' label='Touren Code' />
        <TextField source='session_id' label='Passwort' />
        <DateField
          source='lastEdit'
          label='letzte Bearbeitung'
          options={{ format: 'DD/MM/YYYY' }}
        />
        <NumberField source='difficulty' label='Schwierigkeitsgrad' />
        <ChipField source='status' label='Status' />
        <EditButton label='Editieren' />
      </Datagrid>
    </List>
  );
};
