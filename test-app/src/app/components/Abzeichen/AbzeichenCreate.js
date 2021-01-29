import React from 'react';
import {
  ImageField,
  ImageInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
  Create
} from 'react-admin';


// create a new badge
export const AbzeichenCreate = (props) => (
  <Create title='Lade Abzeichen hoch' {...props}>
    <SimpleForm>
      <TextInput disabled source='id' label='ID' fullWidth/>
      <TextInput source='name' label='Name' fullWidth />
      <ImageInput source='Badge' accept='image/*'>
        <ImageField source='picture' />
      </ImageInput>
      {/* TODO: Link to connected profile pictures and select by existing name/picture
       (new profile pictures have to be added in the ProfilePicture database)*/}
      <ReferenceInput
        source='unlocked_picture'
        reference='ProfilePicture'
        label='freigeschaltete Profilbilder'
      >
        <SelectInput source='$oid' />
      </ReferenceInput>
      <NumberInput source='cost' label='Kosten' />
    </SimpleForm>
  </Create>
);
