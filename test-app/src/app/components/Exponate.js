import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  ImageField,
  BooleanField,
  EditButton,
  Edit,
  SimpleForm,
  TextInput,
  ImageInput,
  Create,
  FilterList,
  FilterListItem,
  FilterLiveSearch,
  SimpleShowLayout,
  ReferenceField,
  Show,
} from 'react-admin';
//icons
import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import ClassIcon from '@material-ui/icons/Class';
import { Card as MuiCard, CardContent, withStyles } from '@material-ui/core';

// check if picture object is not empty (create boolean)
const HasImageFilter = () => (
  <FilterList label='Bildverknüpfung' icon={<ImageSearchIcon />}>
    <FilterListItem label='vorhanden' value={{picture: true }} />
    <FilterListItem label='nicht vorhanden' value={{ picture: null }} />
  </FilterList>
);

// TODO: map each existing category into a Filter List Item Label
const KategorieFilter = () => (
  <FilterList label='Kategorie' icon={<ClassIcon />}>
    {/*  {Kategorie.map(Kategorie => (
          <FilterListItem
              label={Kategorie.name}
              key={Kategorie.id}
              value={{ groups: Kategorie.id }}
          />
      )) } */}
  </FilterList>
);

//TODO: more filters.. Subkategorie Mapping, Timeframes, Material, ...? 

// filter sidebar styling
const Card = withStyles((theme) => ({
  root: {
    [theme.breakpoints.up('sm')]: {
      order: -1, // display on the left rather than on the right of the list
      width: '15em',
      marginRight: '1em',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}))(MuiCard);

// sidebar functionality
const FilterSidebar = () => (
  <Card>
    <CardContent>
      <FilterLiveSearch source='full_name' />
      <HasImageFilter />
      <KategorieFilter />
    </CardContent>
  </Card>
);

// edit expand component
const ImageShow = (props) => (
  <Show
    {...props}
    /* disable the app title change when shown */
    title=' '
  >
    <SimpleShowLayout>
      <TextField source='art_type' label='Kunsttyp' />
      <TextField source='description' label='Beschreibung' />
      <TextField source='additionfal_inf' label='Weitere Informationen' />
      {/* add new table with images and reference them here*/}
      <ReferenceField label='Bildverknüpfung' source='' reference='Pictures'>
        <ImageField source='picture' />
      </ReferenceField>
      <TextField source='year' label='Jahr' />
      <TextField source='material' label='Material' />
      <TextField source='size_' label='Größe' />
      <TextField source='location' label='Ort' />
    </SimpleShowLayout>
  </Show>
);

// list the exhibits
export const ExponateList = (props) => (
  <List {...props} title='Exponate' aside={<FilterSidebar />}>
    <Datagrid expand={<ImageShow />}>
      {/* todo: use ObjectID as primary key 
      instead of <TextField source='ID' /> */}
      <TextField source='_id' label='ObjektID' />
      <TextField source='title' label='Titel' />
      <TextField source='creator' label='Ersteller' />
      <TextField source='category' label='Kategorie' />
      <TextField source='sub_category' label='Subkategorie' />
      <TextField
        source='interdisciplinary_context'
        label='Interdisziplinärkontext'
      />
      {/* should be true if there is an linked picture */}
      <ReferenceField label='Bildverknüpfung' source='' reference='Pictures'>
        <BooleanField source='picture' />
      </ReferenceField>
      <EditButton />
    </Datagrid>
  </List>
);

// edit an exhibit
export const ExponateEdit = (props) => (
  <Edit {...props} title='Bearbeite Exponate' >
    <SimpleForm>
      {/* <TextInput disabled source='ID' /> */}
      <TextInput source='_id' label='ObjektID' />
      <TextInput source='title' label='Titel' />
      <TextInput source='description' label='Beschreibung' />
      <TextInput source='additionfal_inf' label='Weitere Informationen' />
      <TextInput source='category' label='Kategorie' />
      <TextInput source='sub_category' label='Subkategorie' />
      <TextInput
        source='interdisciplinary_context'
        label='Interdisziplinärkontext'
      />
      <TextInput source='year' label='Jahr' />
      <TextInput source='picture' label='Bild' />
      <TextInput source='art_type' label='Kunsttyp' />
      <TextInput source='creator' label='Ersteller' />
      <TextInput source='material' label='Material' />
      <TextInput source='size_' label='Größe' />
      <TextInput source='location' label='Ort' />
      <ImageInput source='picture' />
    </SimpleForm>
  </Edit>
);

// create a new exhibit
// todo: ID should not be created manually but automacially (distinct id)
export const ExponateCreate = (props) => (
  <Create title='Erstelle Exponate' {...props}>
    <SimpleForm>
      <TextInput source='_id' label='ObjektID' />
      <TextInput source='title' label='Titel' />
      <TextInput source='description' label='Beschreibung' />
      <TextInput source='additionfal_inf' label='Weitere Informationen' />
      <TextInput source='category' label='Kategorie' />
      <TextInput source='sub_category' label='Subkategorie' />
      <TextInput
        source='interdisciplinary_context'
        label='Interdisziplinärkontext'
      />
      <TextInput source='year' label='Jahr' />
      <TextInput source='picture' label='Bild' />
      <TextInput source='art_type' label='Kunsttyp' />
      <TextInput source='creator' label='Ersteller' />
      <TextInput source='material' label='Material' />
      <TextInput source='size_' label='Größe' />
      <TextInput source='location' label='Ort' />
      <ImageInput source='picture' />
    </SimpleForm>
  </Create>
);