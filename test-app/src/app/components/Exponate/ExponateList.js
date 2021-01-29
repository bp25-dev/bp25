import React from 'react';
import {
  List,
  SingleFieldList,
  Datagrid,
  EditButton,
  //Filter
  FilterList,
  FilterListItem,
  FilterLiveSearch,
  //Shows
  SimpleShowLayout,
  Show,
  //Fields
  TextField,
  ImageField,
  BooleanField,
  ReferenceField,
  ReferenceArrayField,
} from 'react-admin';
// material UI styling
import {
  Card as MuiCard,
  CardContent,
  withStyles,
} from '@material-ui/core';
//icons
import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import ClassIcon from '@material-ui/icons/Class';

// filter sidebar styling
const Card = withStyles((theme) => ({
    root: {
      [theme.breakpoints.up('sm')]: {
        order: -1, // display on the left rather than on the right of the list
        width: '15em',
        minWidth: 250,
        marginRight: '1em',
      },
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
  }))(MuiCard);
  
  //TODO: more filters.. Subkategorie Mapping, Timeframes, Material, ...?
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
      {/*  {category.map(category => (
            <FilterListItem
                 label={category.name}
                key={category.name}
            />
        )) }  */}
    </FilterList>
  );
  
  // sidebar functionality
  const FilterSidebar = () => (
    <Card>
      <CardContent>
        <FilterLiveSearch />
        <HasImageFilter />
        <KategorieFilter />
      </CardContent>
    </Card>
  );
  
  
  // edit expand component
  const ImageShow = (props) => {
    return (
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
  };
  
// list the exhibits
export const ExponateList = (props) => {
    return (
      <List {...props} title='Exponate' aside={<FilterSidebar /> }>
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
  };