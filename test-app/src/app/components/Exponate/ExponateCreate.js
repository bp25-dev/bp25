import React from 'react';
import {
  Create,
  //Forms
  TabbedForm,
  FormTab,
  //Inputs
  TextInput,
  ImageInput,
  ReferenceInput,
} from 'react-admin';
import RichTextInput from 'ra-input-rich-text';
// material UI styling
import {
  Card as MuiCard,
  makeStyles,
} from '@material-ui/core';

//Edit & Create Styling
const useStyles = makeStyles({
  inlineBlock: { display: 'inline-flex', marginRight: '1rem' },
});


// create a new exhibit
// todo: ID should not be created manually but automacially (distinct id)
export const ExponateCreate = (props) => {
  const classes = useStyles();
  return (
    <Create title='Erstelle Exponate' {...props}>
      <TabbedForm warnWhenUnsavedChanges>
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
            label='Interdisziplinärkontext'
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
          <ReferenceInput source='pictures' reference='Pictures' label='Bild'>
            <ImageInput source='picture' fullWidth />
          </ReferenceInput>
        </FormTab>
      </TabbedForm>
    </Create>
  );
};
