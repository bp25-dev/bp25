import React from 'react';
import {
  List,
  Datagrid,
  SingleFieldList,
  EditButton,
  ChipField,
  BooleanField,
  ReferenceManyField,
  downloadCSV,
} from 'react-admin';
// material UI imports
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { CustomListActions } from '../CustomListActions.js';
import { CustomBulkActions } from '../CustomBulkActions.js';
import { UserFilterBar } from './UserFilter';
import { unparse as convertToCSV } from 'papaparse/papaparse.min';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'nowrap',
    alignItems: 'center',
  },
  avatar: {
    marginRight: theme.spacing(1),
  },
}));

const CustomerField = ({ record }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Avatar
        className={classes.avatar}
        record={record}
        style={{ width: 25, height: 25 }}
      />
      {record.username}
    </div>
  );
};

// change each second row to light blue
const postRowStyle = (record, index) => ({
  backgroundColor: index % 2 ? 1 : '#e4edf8',
});

const userExporter = (data) => {
  const csv = convertToCSV({
    data,
    fields: ['id', 'username', 'Adminrechte'],
  });
  const BOM = '\uFEFF';
  downloadCSV(`${BOM} ${csv}`, 'Benutzer');
};

// show eixsting users
export const UserList = (props) => (
  <List
    {...props}
    title='Benutzer*innen'
    filters={<UserFilterBar />}
    actions={<CustomListActions />}
    bulkActionButtons={<CustomBulkActions />}
    exporter={userExporter}
  >
    <Datagrid rowStyle={postRowStyle}>
      {/*  TODO: get real primary key of user ID (username?) 
      dont show id for user study
      <TextField source='id' label='ID' /> */}
      <CustomerField source='username' label='Benutzer*innen-Name' />
      <BooleanField
        source='Adminrechte'
        label='Adminrechte'
        TrueIcon={DoneIcon}
        FalseIcon={ClearIcon}
      />
      <ReferenceManyField
        label='Erstellte Touren'
        reference='Touren'
        source='username'
        target='owner.username'
      >
        <SingleFieldList>
          <ChipField source='name' />
        </SingleFieldList>
      </ReferenceManyField>
      <EditButton label="Editieren"/>
    </Datagrid>
  </List>
);

const optionRenderer = (choice) => `${choice.picture}`;

// edit password with user rights first try
/* export const AccountEdit = ({ permissions, ...props }) => (
  <Edit title='Accountdaten ändern' {...props}>
    <TabbedForm initialValues={{ role: 'user' }}>
      <FormTab label='user.form.summary'>
        {permissions === 'admin' && <TextInput disabled source='id' />}
        <TextInput source='username' label='Username' validate={required()} />
      </FormTab>
      {permissions === 'admin' && (
        <FormTab label='user.form.security'>
          <TextInput source='email' label='Email' validate={required()} />
          <PasswordInput
            source='password'
            label='Passwort'
            validate={required()}
          />
          <BooleanInput
            source='Adminrechte'
            label='Adminrechte erlauben?'
            validate={required()}
          />
        </FormTab>
      )}
    </TabbedForm>
  </Edit>
); */
