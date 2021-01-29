import React from 'react';
import {
  List,
  Edit,
  Create,
  Datagrid,
  SingleFieldList,
  SimpleForm,
  EditButton,
  TextField,
  ChipField,
  ReferenceField,
  EmailField,
  ArrayField,
  FunctionField,
  BooleanField,
  PasswordInput,
  TextInput,
  BooleanInput,
} from 'react-admin';
// material UI imports
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';

// show eixsting users
export const UserList = (props) => (
  <List {...props} title='Benutzer'>
    <Datagrid>
     {/*  TODO: get real primary key of user ID (username?) */}
      <TextField source='id' label='ID' />
      <TextField source='username' label='Benutzername' />
      <EmailField source='email' label='Email' />
      <FunctionField
        source='password'
        label='Passwort'
        render={(record) => `**********`}
      />
      <BooleanField
        source='producer'
        label='Ersteller'
        TrueIcon={DoneIcon}
        FalseIcon={ClearIcon}
      />
      <BooleanField
        source='Adminrechte'
        label='Adminrechte'
        TrueIcon={DoneIcon}
        FalseIcon={ClearIcon}
      />
      <ArrayField source='badges' label='Abzeichen'>
        <SingleFieldList>
          <ReferenceField label='Abzeichen' source='_id' reference='Abzeichen'>
            <ChipField source='name' />
          </ReferenceField>
        </SingleFieldList>
      </ArrayField>
      <EditButton />
    </Datagrid>
  </List>
);

const optionRenderer = (choice) => `${choice.picture}`;

// edit paasword
export const AccountEdit = (props) => (
  <Edit title='Accountdaten ändern' {...props}>
    <SimpleForm>
      <TextInput disabled source='id' label='ID' />
      <TextInput source='username' label='Benutzername' />
      <TextInput source='email' label='Email' />
      <PasswordInput source='password' label='Passwort' />
      <BooleanInput source='producer' label='Ersteller Status erteilen?' />
      <BooleanInput source='Adminrechte' label='Adminrechte erlauben?' />
    </SimpleForm>
  </Edit>
);

// create a new user
export const UserCreate = (props) => (
  <Create title='Erstelle Admin' {...props}>
    <SimpleForm>
      <TextInput source='username' label='Benutzername' />
      <TextInput source='email' label='Email' />
      <PasswordInput source='password' label='Passwort' />
      <BooleanInput source='producer' label='Ersteller Status erteilen?' />
      <BooleanInput source='Adminrechte' label='Adminrechte erlauben?' />
    </SimpleForm>
  </Create>
);

// to do: missing functions are to be embedded on the site
// look up how to show different tables/ resources on one single page