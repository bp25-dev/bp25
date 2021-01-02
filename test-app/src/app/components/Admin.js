import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  PasswordInput,
  SelectInput,
  ReferenceInput,
  EditButton,
  Edit,
  SimpleForm,
  TextInput,
  Create,
} from 'react-admin';

export const UserList = (props) => (
  <List {...props}>
    <Datagrid>
      <EmailField source='Email' />
      <TextField source='Passwort' />
      <TextField source='Code' />
      <EditButton basePath='./app/components/Admin.js' />
    </Datagrid>
  </List>
);

export const PasswordEdit = (props) => (
  <Edit title='Passwort ändern' {...props}>
    <SimpleForm>
      <TextInput disabled source='Email' />
      <PasswordInput source='Passwort' />
      {/* <TextInput disabled source='Code' /> */}
    </SimpleForm>
  </Edit>
);

export const UserCreate = (props) => (
  <Create title='Erstelle Admin' {...props}>
    <SimpleForm>
       {/*  <ReferenceInput 
            source="Code"
            reference="Codes"
            allowEmpty>
            <SelectInput optionText="Code" />
        </ReferenceInput> */}
        <TextInput source='Email' />
        <PasswordInput source='Passwort' />
    </SimpleForm>
  </Create>
);

export const CodeCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source='Code' />
    </SimpleForm>
  </Create>
);

// export const DeleteUser = props => (
//   <Create {...props}>
//     <SimpleForm>
//       <TextInput source="Email" />
//     </SimpleForm>
//   </Create>
// );

// export const DowngradeUser = props => (
//   <Create {...props}>
//     <SimpleForm>
//       <TextInput source="Email" />
//     </SimpleForm>
//   </Create>
// );
