import React from 'react';
import {
  List,
  Edit,
  Create,
  Datagrid,
  TabbedForm,
  FormTab,
  SingleFieldList,
  SimpleForm,
  EditButton,
  TextField,
  ChipField,
  ReferenceArrayField,
  EmailField,
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
        source='Adminrechte'
        label='Adminrechte'
        TrueIcon={DoneIcon}
        FalseIcon={ClearIcon}
      />
      {/* <ReferenceArrayField
        label='Erstellte Objekte'
        reference='Exponate'
        source='username'
      >
        <SingleFieldList>
          <ChipField source='title' />
        </SingleFieldList>
      </ReferenceArrayField> */}
      <EditButton />
    </Datagrid>
  </List>
);

const optionRenderer = (choice) => `${choice.picture}`;

// edit paasword with user rights first try
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

export const AccountEdit = (props) => (
  <Edit title='Accountdaten ändern' {...props}>
    <SimpleForm>
      <TextInput disabled source='id' label='ID' />
      <TextInput source='username' label='Benutzername' />
      <TextInput source='email' label='Email' />
      <PasswordInput source='password' label='Passwort' />
      <BooleanInput source='Adminrechte' label='Adminrechte erlauben?'/>
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
