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
  ImageField,
  ArrayField,
  EmailField,
  BooleanField,
  PasswordInput,
  TextInput,
  BooleanInput,
} from 'react-admin';
import AddAdmin from '../components/Admin/AddAdmin';
import CreateCode from '../components/Admin/CreateCode';
// material UI imports
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';

// show eixsting users
export const UserList = (props) => (
  <List {...props} title='Benutzer'>
    <Datagrid>
      <TextField source='username' label='Benutzername' />
      <TextField source='password' label='Passwort' />
      <BooleanField
        source='producer'
        label='Ersteller'
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
      {/* <ReferenceField
        label='Profilbild'
        source='profile_picture'
        reference='Profilbild'
      >
        <ImageField source='picture' />
      </ReferenceField>  
       <BooleanField
        source='Adminrechte'
        label='Adminrechte'
        TrueIcon={DoneIcon}
        FalseIcon={ClearIcon}
      /> */}
      <EditButton />
    </Datagrid>
  </List>
);

// edit paasword
export const AccountEdit = (props) => (
  <Edit title='Accountdaten ändern' {...props}>
    <SimpleForm>
      <TextInput disabled source='Email' />
      <PasswordInput source='Passwort' />
      <BooleanInput source='Adminrechte' label='Adminrechte erlauben?' />
      {/* <TextInput disabled source='Code' /> */}
    </SimpleForm>
  </Edit>
);

// create a new user
export const UserCreate = (props) => (
  <Create title='Erstelle Admin' {...props}>
    <SimpleForm>
      <TextInput source='Email' />
      <PasswordInput source='Passwort' />
    </SimpleForm>
  </Create>
);

// to do: missing functions are to be embedded on the site
// look up how to show different tables/ resources on one single page
export const CodeCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source='Code' />
    </SimpleForm>
  </Create>
);

export const DeleteUser = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source='Email' />
    </SimpleForm>
  </Create>
);

export const DowngradeUser = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source='Email' />
    </SimpleForm>
  </Create>
);

// todo: embed text on the side -> move to resource in App.js?
export default class Admins extends React.Component {
  render() {
    return (
      <div>
        <h1>Admin-Seite</h1>
        <CreateCode></CreateCode>
        <AddAdmin></AddAdmin>
      </div>
    );
  }
}
