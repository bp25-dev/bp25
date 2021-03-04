import React from 'react';
import {
  ImageField,
  ImageInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  Edit,
  SimpleForm,
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
  TextInput, 
=======
  TextInput,
>>>>>>> fenja_dev
  Toolbar,
  SaveButton,
  SimpleShowLayout,
  TextField,
  //validation
  minValue,
  maxValue,
  number,
} from 'react-admin';

import DeleteWithCustomConfirmButton from 'ra-delete-with-custom-confirm-button';

const UserEditToolbar = (props) => (
  <Toolbar {...props}>
    <SaveButton />
  </Toolbar>
);

const DeleteConfirmContent = (props) => {
  return (
    <SimpleShowLayout {...props}>
      <TextField disabled source='id' label='ID' />
      <TextField source='name' label='Name' />
    </SimpleShowLayout>
  );
};

// create a range withing the costs can be selected
const validateCost = [
  number(),
  minValue(1, 'Bitte wähle eine Zahl zwischen 1 und 100'),
  maxValue(100, 'Bitte wähle eine Zahl zwischen 1 und 100'),
];

// edit badges
export const AbzeichenEdit = (props) => (
<<<<<<< HEAD
    <Edit title='Verändere Verknüpfung' {...props}>
      <SimpleForm toolbar={<UserEditToolbar />} >
        <TextInput disabled source='id' label='ID' fullWidth />
        <TextInput source='name' label='Name' fullWidth/>
        {/* Select a new picture for the badge*/}
        <ImageInput source='Abzeichen' accept='image/*' placeholder={<p>Klicke hier, um das Bild für das Abzeichen zu ändern</p>}>
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
<<<<<<< HEAD
          <SelectInput source='picture' />
        </ReferenceInput>
        <NumberInput source='cost' label='Kosten' />
=======
          <SelectInput optionText='picture' optionValue='picture' />
        </ReferenceInput>
        <NumberInput source='cost' label='Kosten' validate={validateCost}/>
        <DeleteWithCustomConfirmButton
          title={DeleteConfirmTitle}      
          content={DeleteConfirmContent}  
          label='Löschen'                 
          cancel='Abbrechen'                 
        />
>>>>>>> anna_dev
      </SimpleForm>
    </Edit>
  );
=======
  <Edit title='Verändere Verknüpfung' {...props}>
    <SimpleForm toolbar={<UserEditToolbar />}>
      <TextInput disabled source='id' label='ID' fullWidth />
      <TextInput source='name' label='Name' fullWidth />
      {/* Select a new picture for the badge*/}
      <ImageInput
        source='Abzeichen'
        accept='image/*'
        placeholder={
          <p>Klicke hier, um das Bild für das Abzeichen zu ändern</p>
        }
      >
        <ImageField source='picture' />
      </ImageInput>
      {/* TODO: Link to connected profile pictures and select by existing name/picture
         (new profile pictures have to be added in the ProfilePicture database)*/}
      <ReferenceInput
        source='unlocked_picture'
        reference='ProfilePicture'
        label='freigeschaltete Profilbilder'
      >
        <SelectInput optionText='picture' optionValue='picture' />
      </ReferenceInput>
      <NumberInput source='cost' label='Kosten' validate={validateCost} />
      <DeleteWithCustomConfirmButton
        title='Sind Sie sicher, dass Sie dieses Abzeichen löschen wollen?'
        content={DeleteConfirmContent}
        label='Löschen'
        cancel='Abbrechen'
      />
    </SimpleForm>
  </Edit>
);
>>>>>>> fenja_dev
