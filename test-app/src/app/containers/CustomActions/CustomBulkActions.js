import React from 'react';
import { Fragment } from 'react';
import {
  BulkDeleteWithConfirmButton, BulkExportButton,
} from 'react-admin';

export const CustomBulkActions = props => (
    <Fragment>
      <BulkDeleteWithConfirmButton 
        label='Löschen'
        confirmTitle="Objekt löschen"
        confirmContent="Sind Sie sich sicher? Die Aktion kann nicht rückgängig gemacht werden."
        {...props} />
    </Fragment>
  );


  export const CustomBulkActionsExponate = props => (
    <Fragment>
      <BulkDeleteWithConfirmButton 
        label='Löschen'
        confirmTitle="Objekt löschen"
        confirmContent="Sind Sie sich sicher? Die Aktion kann nicht rückgängig gemacht werden."
        {...props} />
        <BulkExportButton
        label='Daten exportieren' {...props}/> 
    </Fragment>
  );