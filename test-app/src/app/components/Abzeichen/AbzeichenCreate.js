import React from 'react';
import {
  ImageField,
  ImageInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
<<<<<<< HEAD
  Create
} from 'react-admin';

=======
  Create,
  //validation
  minValue,
  maxValue,
  number,
} from 'react-admin';

// create a range withing the costs can be selected
const validateCost = [
  number(),
  minValue(1, 'Bitte wähle eine Zahl zwischen 1 und 100'),
  maxValue(100, 'Bitte wähle eine Zahl zwischen 1 und 100'),
];
>>>>>>> anna_dev

// create a new badge
export const AbzeichenCreate = (props) => (
  <Create title='Lade Abzeichen hoch' {...props}>
    <SimpleForm>
      <TextInput disabled source='id' label='ID' fullWidth/>
      <TextInput source='name' label='Name' fullWidth />
<<<<<<< HEAD
      <ImageInput source='Badge' accept='image/*'>
=======
      <ImageInput source='Badge' accept='image/*'placeholder={<p>Klicke hier, um ein Bild von dem Abzeichen hinzuzufügen</p>}>
>>>>>>> anna_dev
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
<<<<<<< HEAD
      <NumberInput source='cost' label='Kosten' />
=======
      <NumberInput source='cost' label='Kosten' validate={validateCost} />
>>>>>>> anna_dev
    </SimpleForm>
  </Create>
);
