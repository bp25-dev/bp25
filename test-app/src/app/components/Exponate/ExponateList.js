import React from 'react';
import {
  List,
  SingleFieldList,
  Datagrid,
  EditButton,
  useListContext,
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
import { Card as MuiCard, CardContent, withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
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
    <FilterListItem label='vorhanden' value={{ img: true }} />
    <FilterListItem label='nicht vorhanden' value={{ img: null }} />
  </FilterList>
);

// .filter((a,b) => ids.indexOf(a) === b))

// sidebar functionality
const FilterSidebar = () => {
  const { ids, data } = useListContext();
  return (
    <Card>
      <CardContent>
        <FilterLiveSearch />
        <HasImageFilter />
        <FilterList label='Subkategorie' icon={<ClassIcon />}>
          {ids.map((id) => (
            <FilterListItem
              label={data[id].sub_category}
              key={data[id].id}
              value={{ groups: data[id].id }}
            />
          ))}
        </FilterList>
        <FilterList label='Ersteller' icon={<ClassIcon />}>
          {ids.map((id) => (
            <FilterListItem
              label={data[id].creator}
              key={data[id]._id}
              value={{ groups: data[id]._id }}
            />
          ))}
        </FilterList>
        {/*  <FilterList label='Interdisziplinäre Bezüge' icon={<ClassIcon />}>
          {
            ids.map((id) => (
              <FilterListItem
                label={data[id].interdisciplinary_context.split('Themen:')}
                value={data[id]._id}
              />
            ))
            .filter((a,b) => ids.indexOf(a) === b)
          }
        </FilterList>  */}
      </CardContent>
    </Card>
  );
};

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
        <ImageField source='img' label='Bild' />
        {/* add new table with images and reference them here*/}
        <ReferenceArrayField
          label='Bildverknüpfungen'
          reference='Pictures'
          source='picture.$oid'
        >
          <SingleFieldList>
            <ImageField source='picture.$oid' />
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
          label='Interdisziplinäre Bezüge'
        />
        {/*TODO: remove direct fields after user study */}
        <TextField source='img' label='Bild' />
        {/* should be true if there is an linked picture 
        <ReferenceField
          label='Bildverknüpfung'
          source='picture.$oid'
          reference='Pictures'
        >
          <BooleanField source='picture.$oid' />
        </ReferenceField>*/}
        <EditButton />
      </Datagrid>
    </List>
  );
};
