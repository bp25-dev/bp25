import React from 'react';
import {
  Edit,
  //Forms
  TabbedForm,
  FormTab,
  //Inputs
  TextInput,
  ImageInput,
  ReferenceInput,
  SelectInput,
  Toolbar,
  SaveButton,
  SimpleShowLayout,
  TextField,
} from 'react-admin';
import RichTextInput from 'ra-input-rich-text';
// material UI styling
import { makeStyles } from '@material-ui/core';
import DeleteWithCustomConfirmButton from 'ra-delete-with-custom-confirm-button';

const UserEditToolbar = (props) => (
  <Toolbar {...props}>
    <SaveButton />
  </Toolbar>
);

const DeleteConfirmContent = (props) => {
  return (
    <SimpleShowLayout {...props}>
      <TextField source='_id' label='Objekt ID' />
      <TextField source='title' label='Titel' />
      <TextField source='category' label='Kategorie' />
      <TextField source='year' label='Jahr' />
      <TextField source='art_type' label='Kunsttyp' />
      <TextField source='creator' label='Ersteller' />
    </SimpleShowLayout>
  );
};

//Edit & Create Styling
const useStyles = makeStyles({
  inlineBlock: { display: 'inline-flex', marginRight: '1rem' },
});

// edit an exhibit
export const ExponateEdit = (props) => {
  const classes = useStyles();
  return (
    <Edit {...props} title='Bearbeite Exponate'>
      <TabbedForm toolbar={<UserEditToolbar />} warnWhenUnsavedChanges>
        <FormTab label='Übersicht'>
          <TextInput source='_id' label='ObjektID' fullWidth />
          <TextInput source='title' label='Titel' fullWidth />
          <RichTextInput source='description' label='Beschreibung' fullWidth />
          <TextInput
            source='additionfal_inf'
            label='Weitere Informationen'
            fullWidth
          />
          <TextInput source='category' label='Kategorie' fullWidth />
          <TextInput source='sub_category' label='Subkategorie' fullWidth />
          <TextInput
            source='interdisciplinary_context'
            label='Interdisziplinäre Bezüge'
            fullWidth
          />
        </FormTab>
        <FormTab label='Eckdaten'>
          <TextInput source='year' label='Jahr' fullWidth />
          <TextInput source='art_type' label='Kunsttyp' fullWidth />
          <TextInput source='creator' label='Ersteller' fullWidth />
          <TextInput source='material' label='Material' fullWidth />
          <TextInput
            source='size_'
            label='Größe'
            formClassName={classes.inlineBlock}
          />
          <TextInput
            source='location'
            label='Ort'
            formClassName={classes.inlineBlock}
          />
        </FormTab>
        <FormTab label='Bildverknüpfungen'>
          {/* <ReferenceInput source='pictures' reference='Pictures' label='Bild'>
              <ImageInput source='picture' placeholder={<p>Klicke hier, um ein Bild von dem Exponat hinzuzufügen, oder das vorhandene Bild zu ändern</p>} fullWidth />
            </ReferenceInput>  */}
            {/* for user study */}
            <ImageInput source='img' placeholder={<p>Klicke hier, um ein Bild von dem Exponat hinzuzufügen, oder das vorhandene Bild zu ändern</p>} fullWidth />
        </FormTab>
        <DeleteWithCustomConfirmButton
          title={ 'Sind Sie sicher, dass Sie dieses Exponat löschen wollen?'}
          content={DeleteConfirmContent}
          label='Löschen'
          cancel='Abbrechen'
        />
      </TabbedForm>
    </Edit>
  );
};
