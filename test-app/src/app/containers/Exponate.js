import React from 'react';
import AddExponate from '../components/Exponate/AddExponate';
import {
  List,
  Datagrid,
  TextField,
  BooleanField,
  EditButton,
  Edit,
  SimpleForm,
  TextInput,
  BooleanInput,
  Create,
  Filter,
  FilterList,
  FilterListItem,
  FilterLiveSearch
} from 'react-admin';
//icons
import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import ClassIcon from '@material-ui/icons/Class';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { Card as MuiCard, CardContent, withStyles } from '@material-ui/core';


const HasImageFilter = () => (
  <FilterList label='Bildverknüpfung' icon={<ImageSearchIcon />}>
    <FilterListItem label='vorhanden' value={{ Bildverknüpfung: 'vorhanden' }} />
    <FilterListItem label='nicht vorhanden' value={{ Bildverknüpfung: 'nicht vorhanden' }} />
  </FilterList>
);

const KategorieFilter = () => (
  <FilterList
      label="Kategorie"
      icon={<ClassIcon />}
  >
    <FilterListItem label='Art' value={{ Kategorie: 'Art' }} />
     {/* {Kategorie.map(Kategorie => (
          <FilterListItem
              label={Kategorie.name}
              key={Kategorie.id}
              value={{ groups: Kategorie.id }}
          />
      ))}  */}
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
      <FilterLiveSearch source="full_name" />
      <HasImageFilter />
      <KategorieFilter/>
    </CardContent>
  </Card>
);

// list the exhibits
export const ExponateList = (props) => (
  <List {...props} title='Exponate' aside={<FilterSidebar />}>
    <Datagrid  rowClick='edit' >
      <TextField source='ObjektID' label='ID' />
      <TextField source='Kategorie' />
      <TextField source='Subkategorie' />
      <TextField source='Titel' />
      <TextField source='Jahr' />
      <TextField source='Bild' />
      <TextField source='Kunsttyp' />
      <TextField source='Ersteller' />
      <TextField source='Material' />
      <TextField source='Größe' />
      <TextField source='Ort' />
      <TextField source='Beschreibung' />
      <TextField source='Interdisziplinärkontext' />
      <BooleanField source="Bildverknüpfung" TrueIcon={CheckCircleOutlineIcon} FalseIcon={HighlightOffIcon}/>
      {/* add new table with images and reference them here
      <ReferenceField label="Bilderverknüpfung" source="image_url" reference="Bilderverknüpfung"/> */}
      <EditButton basePath='./app/components/Exponate.js' />
    </Datagrid>
  </List>
);

// edit an exhibit
export const ExponateEdit = (props) => (
  <Edit title='Bearbeite Exponate' {...props}>
    <SimpleForm>
      <TextInput disabled source='ObjektID' />
      <TextInput source='Kategorie' />
      <TextInput source='Subkategorie' />
      <TextInput source='Titel' />
      <TextInput source='Jahr' />
      <TextInput source='Bild' />
      <TextInput source='Kunsttyp' />
      <TextInput source='Ersteller' />
      <TextInput source='Material' />
      <TextInput source='Größe' />
      <TextInput source='Ort' />
      <TextInput source='Beschreibung' />
      <TextInput source='Interdisziplinärkontext' />
      <BooleanInput source="Bildverknüpfung" 
      falseLabel="nicht vorhanden"
      trueLabel="vorhanden" />
    </SimpleForm>
  </Edit>
);

// create a new exhibit
// todo: ID should not be created manually but automacially (distinct id)
export const ExponateCreate = (props) => (
  <Create title='Erstelle Exponate' {...props}>
    <SimpleForm>
      <TextInput source='Kategorie' />
      <TextInput source='Subkategorie' />
      <TextInput source='Titel' />
      <TextInput source='Jahr' />
      <TextInput source='Bild' />
      <TextInput source='Kunsttyp' />
      <TextInput source='Ersteller' />
      <TextInput source='Material' />
      <TextInput source='Größe' />
      <TextInput source='Ort' />
      <TextInput source='Beschreibung' />
      <TextInput source='Interdisziplinärkontext' />
      <BooleanInput source="Bildverknüpfung"
      falseLabel="nicht vorhanden"
      trueLabel="vorhanden" />
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
