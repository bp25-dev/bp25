import React,{ Fragment } from 'react';
import {
  BulkDeleteWithConfirmButton,
} from 'react-admin';

export const CustomBulkActions = props => (
    <Fragment>
      <BulkDeleteWithConfirmButton 
        label='Löschen'
        confirmTitle="Objekt löschen"
        confirmContent="Sind Sie sich sicher? Die Aktion kann nicht rückgängig gemacht werden"
        {...props} />
    </Fragment>
  );