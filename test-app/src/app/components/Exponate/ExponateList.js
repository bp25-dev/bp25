import React from 'react';
import {
  List,
  SingleFieldList,
  Datagrid,
  EditButton,
  //Shows
  SimpleShowLayout,
  Show,
  //Fields
  TextField,
  ImageField,
  ReferenceArrayField,
} from 'react-admin';
import {FilterSidebar} from './ExponateFilterSidebar.js'

// edit expand component
const ImageShow = (props) => {
  return (
    <Show 
      {...props}
      title=' ' /* disable the app title change when shown */
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
