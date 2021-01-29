import React from 'react';
import {
  List,
  Datagrid,
  TextField,
} from 'react-admin';
// material UI imports
import Typography from '@material-ui/core/Typography';


const Aside = (props) => (
  <div style={{ width: 200, margin: '1em' }}>
  <Typography variant="h6">Code Verteilung</Typography>
  <Typography variant="body2">
      Vergebene Codes: {props.total}
  </Typography>
</div>
);

export const CodeList = (props) => (

    <List {...props} title='Ersteller Codes' aside={<Aside />}>
      <Datagrid>
        <TextField source='id' label='ID' />
        <TextField source='Code' />
       {/*  reference to users */}
       <TextField source='username' />
       {/* <BooleanField
        source='producer'
        label='Ersteller'
        TrueIcon={DoneIcon}
        FalseIcon={ClearIcon}
      /> */}
      </Datagrid>
    </List>
  );