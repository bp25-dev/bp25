import React from 'react';
import AddExponate from '../components/Exponate/AddExponate';
import {
  List,
  Datagrid,
  TextField,
  ImageField,
  EditButton,
  Edit,
  SimpleForm,
  TextInput,
  ImageInput,
  Create,
  Filter,
  FilterList,
  FilterListItem,
  FilterLiveSearch,
  SimpleShowLayout,
  Show,
  UrlField,
} from 'react-admin';
//icons
import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import ClassIcon from '@material-ui/icons/Class';
import { Card as MuiCard, CardContent, withStyles } from '@material-ui/core';


const HasImageFilter = () => (
  <FilterList label='Bildverknüpfung' icon={<ImageSearchIcon />}>
    <FilterListItem label='vorhanden' value={{ Bildverknüpfung: true }} />
    <FilterListItem label='nicht vorhanden' value={{ Bildverknüpfung: null }} />
  </FilterList>
);

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

// the filter sidebar
// sidebar styling
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
      {/* <ImageField source='picture' />
      <UrlField source='picture' label='Bildverknupfung' /> */}
      {/* add new table with images and reference them here
      <ReferenceField label="Bilderverknüpfung" source="image_url" reference="Bilderverknüpfung"/> */}
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
      <TextField source='_id' label='ObjektID' />
      <TextField source='title' label='Titel' />
      <TextField source='creator' label='Ersteller' />
      <TextField source='category' label='Kategorie' />
      <TextField source='sub_category' label='Subkategorie' />
      <TextField
        source='interdisciplinary_context'
        label='Interdisziplinärkontext'
      />
      <EditButton />
    </Datagrid>
  </List>
);

// edit an exhibit
export const ExponateEdit = (props) => (
  <Edit title='Bearbeite Exponate' {...props}>
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

// todo: embed text on the side -> move to resource in App.js?
export default class Exponate extends React.Component {
  render() {
    return (
      <div>
        <h1>Exponaten-Seite</h1>
        <AddExponate></AddExponate>
      </div>
    );
  }
}