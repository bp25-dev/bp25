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
import {
  Card as MuiCard,
  CardContent,
  withStyles,
} from '@material-ui/core';
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
    <FilterListItem label='vorhanden' value={{ picture: true }} />
    <FilterListItem label='nicht vorhanden' value={{ picture: null }} />
  </FilterList>
);

// test: map post category to side
const Aside = ({ record }) => (
  <div style={{ width: 200, margin: '1em' }}>
    <Typography variant='h6'>Tokenize</Typography>
    {record && (
      <Typography variant='body2'>
        Kunsttyp: {record.art_type.split(';')}
      </Typography>
    )}
    {record && (
      <Typography variant='body2'>
        Kategorie: {record.category.split('und')}
      </Typography>
    )}
  </div>
);
// ref: render function <FunctionField label="Name" render={record => `${record.first_name} ${record.last_name}`} />

// TODO: map each existing category into a Filter List Item Label
const MapFilter = ({ record }) => (
  <FilterList label='Kategorie' icon={<ClassIcon />}>
    {record && (
      <FilterListItem>
        label={record.category}
        key={record._id}
        value={{ groups: record._id }}

      </FilterListItem>
    )}
  </FilterList>
);


// sidebar functionality
const FilterSidebar = () => {
  const { ids, data } = useListContext();
  return(
      <Card>
        <CardContent>
          <FilterLiveSearch />
          <HasImageFilter />
          <FilterList label='Kategorie' icon={<ClassIcon />}>
          {ids.map((id) => (
            <FilterListItem>
            label={data[id].sub_category}
            value={data[id]._id}
          </FilterListItem>
          ))}
          </FilterList>
          {ids.map((id) => (
            <TextField record={data[id]} source='sub_category' label='Kategorie' />
          ))}
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
      aside={<Aside />}
    >
      <SimpleShowLayout>
        <TextField source='art_type' label='Kunsttyp' />
        <TextField source='description' label='Beschreibung' />
        <TextField source='additionfal_inf' label='Weitere Informationen' />
        <ImageField source='picture' label='Bild'/>
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
