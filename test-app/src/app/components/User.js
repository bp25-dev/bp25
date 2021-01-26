import React from 'react';
import {
  List,
  Edit,
  Create,
  Datagrid,
  useListContext,
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
  ReferenceManyField,
  ReferenceField,
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
      <ReferenceManyField
        label='Erstellte Touren'
        reference='Touren'
        // match user.username with Touren.owner.username
        source='username'
        target='owner.username'
      >
        <SingleFieldList>
          <ChipField 
          // display the name of the tour
          source='name' />
        </SingleFieldList>
      </ReferenceManyField> 
      <EditButton />
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

export const AccountEdit = (props) => (
  <Edit title='Accountdaten ändern' {...props}>
    <SimpleForm>
      <TextInput disabled source='id' label='ID' />
      <TextInput source='username' label='Benutzername' />
      <TextInput source='email' label='Email' />
      <PasswordInput source='password' label='Passwort' />
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
      <BooleanInput source='Adminrechte' label='Adminrechte erlauben?' />
    </SimpleForm>
  </Create>
);
