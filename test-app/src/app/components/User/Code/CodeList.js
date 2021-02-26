import React from 'react';
import { List, Datagrid, TextField, ReferenceField } from 'react-admin';
// material UI imports
import Typography from '@material-ui/core/Typography';

const Aside = (props) => (
  <div style={{ width: 200, margin: '1em' }}>
    <Typography variant='h6'>Code Verteilung</Typography>
    <Typography variant='body2'>Vergebene Codes: {props.total}</Typography>
  </div>
);

// change each second row to light blue
const postRowStyle = (record, index) => ({
  backgroundColor: index % 2 ? 1 : '#dbe5f1',
});

export const CodeList = (props) => (
  <List {...props} title='Ersteller Codes' aside={<Aside />}>
    <Datagrid rowStyle={postRowStyle}>
      <TextField source='id' label='ID' />
      <TextField source='code' label='Code' />
      {/*  reference to users */}
      <ReferenceField label='Username' source='username' reference='Benutzer'>
        <TextField source='username' />
      </ReferenceField>
    </Datagrid>
  </List>
);
