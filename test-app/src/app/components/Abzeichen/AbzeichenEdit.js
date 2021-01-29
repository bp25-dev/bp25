import React from 'react';
import {
  ImageField,
  ImageInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  Edit,
  SimpleForm,
  TextInput
} from 'react-admin';

// edit badges
export const AbzeichenEdit = (props) => (
    <Edit title='Verändere Verknüpfung' {...props}>
      <SimpleForm>
        <TextInput disabled source='id' label='ID' fullWidth />
        <TextInput source='name' label='Name' fullWidth/>
        {/* Select a new picture for the badge*/}
        <ImageInput source='Abzeichen' accept='image/*'>
          <ImageField source='picture' />
        </ImageInput>
        {/* TODO: Link to connected profile pictures and select by existing name/picture
         (new profile pictures have to be added in the ProfilePicture database)*/}
        <ReferenceInput
          source='unlocked_picture'
          reference='ProfilePicture'
          label='freigeschaltete Profilbilder'
        >
          <SelectInput source='picture' />
        </ReferenceInput>
        <NumberInput source='cost' label='Kosten' />
      </SimpleForm>
    </Edit>
  );