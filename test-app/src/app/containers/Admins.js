import React from 'react';
import {
    List,
    Datagrid,
    TextField,
    EmailField,
    PasswordInput,
    EditButton,
    Edit,
    SimpleForm,
    TextInput,
    Create,
  } from 'react-admin';
import AddAdmin from '../components/Admin/AddAdmin';
import CreateCode from '../components/Admin/CreateCode';
import { Card, CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';


// create other cards 
const SideCard = () => (
  <Card>
    <CardContent>
    <Typography variant="h5" component="h2">
          this is content
        </Typography>
    </CardContent>
  </Card>
);

// show eixsting users 
export const UserList = (props) => (
    <List {...props} title='Benutzer'
    aside={<SideCard/>}>
      <Datagrid>
        <EmailField source='Email' />
        <TextField source='Passwort' />
        <TextField source='Code' />
        <EditButton basePath='./app/components/Admin.js' />
      </Datagrid>
    </List>
  );
  
  // edit paasword 
  export const PasswordEdit = (props) => (
    <Edit title='Passwort ändern' {...props}>
      <SimpleForm>
        <TextInput disabled source='Email' />
        <PasswordInput source='Passwort' />
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
  
  export const DeleteUser = props => (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="Email" />
      </SimpleForm>
    </Create>
  );<h3>Hier sollen Admins hinzugefügt werden</h3>
  
  export const DowngradeUser = props => (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="Email" />
      </SimpleForm>
    </Create>
  );
 
// todo: embed text on the side -> move to resource in App.js? 
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

