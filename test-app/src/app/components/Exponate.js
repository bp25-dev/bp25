import React from 'react';
import {
  List,
  SingleFieldList,
  Edit,
  Create,
  Datagrid,
  EditButton,
  //Filter
  FilterList,
  FilterListItem,
  FilterLiveSearch,
  //Forms
  TabbedForm,
  FormTab,
  //Shows
  SimpleShowLayout,
  Show,
  //Fields
  TextField,
  ImageField,
  BooleanField,
  ReferenceField,
  ReferenceArrayField,
  //Inputs
  TextInput,
  ImageInput,
  ReferenceInput,
} from 'react-admin';
import RichTextInput from 'ra-input-rich-text';
// material UI styling
import {
  Card as MuiCard,
  CardContent,
  withStyles,
  makeStyles,
} from '@material-ui/core';
//icons
import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import ClassIcon from '@material-ui/icons/Class';



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

// check if picture object is not empty (create boolean)
const HasImageFilter = () => (
  <FilterList label='Bildverknüpfung' icon={<ImageSearchIcon />}>
    <FilterListItem label='vorhanden' value={{ picture: true }} />
    <FilterListItem label='nicht vorhanden' value={{ picture: null }} />
  </FilterList>
);

// TODO: map each existing category into a Filter List Item Label
const KategorieFilter = () => (
  <FilterList label='Kategorie' icon={<ClassIcon />}>
    {/* {  {category.map(category => (
          <FilterListItem
               label={category.name}
              key={category.name}
          />
      )) } */}
  </FilterList>
);

//TODO: more filters.. Subkategorie Mapping, Timeframes, Material, ...?

// filter sidebar styling
const useStyles = makeStyles({
  inlineBlock: { display: 'inline-flex', marginRight: '1rem' },
});

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
      <ReferenceArrayField
        label='Bildverknüpfungen'
        reference='Pictures'
        source='picture'
      >
        <SingleFieldList>
          <ImageField source='picture' />
        </SingleFieldList>
      </ReferenceArrayField>
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
      <ReferenceField
        label='Bildverknüpfung'
        source='picture'
        reference='Pictures'
      >
        <BooleanField source='picture' />
      </ReferenceField>
      <EditButton />
    </Datagrid>
  </List>
);

// edit an exhibit
export const ExponateEdit = (props) => {
  const classes = useStyles();

  return (
    <Edit {...props} title='Bearbeite Exponate'>
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
    </Edit>
  );
};

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
          <ReferenceInput source='pictures' reference='Pictures'label='Bild'>
            <ImageInput source='picture' fullWidth />
          </ReferenceInput>
        </FormTab>
      </TabbedForm>
    </Create>
  );
};
