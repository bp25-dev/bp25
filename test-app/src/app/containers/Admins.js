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
import MiniDrawer from './Drawer';
import AddAdmin from '../components/Admin/AddAdmin';
import CreateCode from '../components/Admin/CreateCode';

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
  // );<h3>Hier sollen Admins hinzugefügt werden</h3>
  
  // export const DowngradeUser = props => (
  //   <Create {...props}>
  //     <SimpleForm>
  //       <TextInput source="Email" />
  //     </SimpleForm>
  //   </Create>
  // );
  
export default class Admins extends React.Component {
    render() {
        return(
            <div>
                <h1>
                    Admin-Seite
                </h1>
              <CreateCode></CreateCode>
              <AddAdmin></AddAdmin>
            </div>
        )    
    }
}

