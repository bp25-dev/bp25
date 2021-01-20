import React from 'react';
import {
  List,
  Edit,
  Create,
  Datagrid,
  SimpleForm,
  SingleFieldList,
  //options
  SimpleFormIterator,
  Filter,
  EditButton,
  Show,
  SimpleShowLayout,
  //validation
  minValue,
  maxValue,
  number,
  //actions
  useListContext,
  TopToolbar,
  CreateButton,
  ExportButton,
  sanitizeListRestProps,
  //fields
  TextField,
  ReferenceField,
  DateField,
  NumberField,
  ChipField,
  ArrayField,
  BooleanField,
  UrlField,
  //inputs
  SelectInput,
  ImageInput,
  SearchInput,
  ReferenceInput,
  NumberInput,
  ArrayInput,
  BooleanInput,
  DateInput,
  TextInput,
} from 'react-admin';
// material UI styles
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';

// filter the tours (search for text)
// TODO: filter Ersteller der Tour
// filter for featured tours (todo, not working yet)
const FilterBar = (props) => (
  <div>
    <Filter {...props}>
      <SearchInput source='q' alwaysOn />
      <SelectInput
        source='status'
        choices={[
          { id: 'freigegeben', name: 'freigegeben' },
          { id: 'ausstehend', name: 'ausstehend' },
          { id: 'privat', name: 'privat' },
        ]}
        alwaysOn
      />
      <SelectInput
        source='owner' label='Ersteller'
        choices={[
          { id: 'username', name: 'Username' },
        ]}
        alwaysOn
      />
      <NumberInput source='difficulty' label='Schwierigkeitsgrad' validate={validateDifficulty} alwaysOn />
      <DateInput
        source='lastEdit'
        label='letzte Bearbeitung'
        options={{ format: 'DD/MM/YYYY' }}
        alwaysOn
      />
    </Filter>
    <Button
      variant='contained'
      size='small'
      startIcon={<DeleteIcon />}
      onClick={() => props.setFilters({})}
    >
      Alle Filter zurücksetzen
    </Button>
  </div>
);

//solution for removing reset button from action bar (doesnt have functionality there)
const ListActions = (props) => {
  const { className, exporter, filters, maxResults, ...rest } = props;
  const {
    currentSort,
    resource,
    filterValues,
    basePath,
    total,
  } = useListContext();
  return (
    <TopToolbar className={className} {...sanitizeListRestProps(rest)}>
      <CreateButton basePath={basePath} />
      <ExportButton
        disabled={total === 0}
        resource={resource}
        sort={currentSort}
        filterValues={filterValues}
        maxResults={maxResults}
      />
    </TopToolbar>
  );
};

//edit expand component
//TODO: get information about stations (from the video) and model them
const StationShow = (props) => (
  <Show
    {...props}
    /* disable the app title change when shown */
    title=' '
  >
    <SimpleShowLayout>
      <ArrayField source='Stationen'>
        <Datagrid>
          {/*  if no object is there it is an individual slide and foto, text, details should be deactivated */}
          <TextField source='Objekt' />
          <TextField source='Foto' />
          <TextField source='Text' />
          <TextField source='Details' />
          <TextField source='Textfeld' />
          <ArrayField source='Fragen'>
            <Datagrid>
              <TextField source='Antwort' />
              <BooleanField source='Antwort' />
            </Datagrid>
          </ArrayField>
          <UrlField source='Bild' />
        </Datagrid>
      </ArrayField>
    </SimpleShowLayout>
  </Show>
);

// TODO: create border to devide the component from the filters (spacing)
const useStyles = makeStyles({
  main: {
    backgroundColor: '#ccc',
  },
});

// create a range withing the Difficulty can be selected
const validateDifficulty = [number(),minValue(1), maxValue(5)];

// list existing tours
export const TourenList = (props) => {
  const classes = useStyles(props);
  return (
    <List
      {...props}
      title='Touren'
      filters={<FilterBar />}
      actions={<ListActions />}
      classes={{ main: classes.main }}
    >
      <Datagrid expand={<StationShow />}>
        {/* TODO: Whats the primaery key? replace Titel for pk or use built in  */}
        <TextField source='_id' label='ID' />
        <TextField source='name' label='Titel' />
        <TextField source='description' label='Beschreibung' />
        {/* refField: source=field in this table, reference=Name of reference Table  */}
        <ReferenceField label='Ersteller' source='owner' reference='Benutzer'>
          {/* source = wanted field from ref table */}
          <TextField source='username' />
        </ReferenceField>
        <ArrayField source='user'>
          <SingleFieldList>
            <ReferenceField
              label='Benutzer'
              source='username'
              reference='Benutzer'
            >
              <ChipField source='username' />
            </ReferenceField>
          </SingleFieldList>
        </ArrayField>
        <TextField source='search_id' label='Touren Code' />
        <TextField source='session_id' label='Passwort' />
        <DateField
          source='lastEdit'
          label='letzte Bearbeitung'
          options={{ format: 'DD/MM/YYYY' }}
        />
        <NumberField source='difficulty' label='Schwierigkeitsgrad' />
        <ChipField source='status' label='Status' />
        <EditButton />
      </Datagrid>
    </List>
  );
};

// edit a tour
export const TourenEdit = (props) => (
  <Edit title='Bearbeite Touren' {...props}>
    <SimpleForm>
      <TextInput disabled source='ID' />
      <TextInput source='name' label='Titel' />
      <TextInput source='description' label='Beschreibung' />
      {/*  TODO: functionality to reference to Besitzer and attending users of the tour  */}
      {/* reference to owner of the tour  */}
      <ReferenceInput label='Ersteller' source='owner' reference='Benutzer'>
        {/*  TODO: get list of existing usernames to select from: idea: map choices */}
        <SelectInput source='username' />
      </ReferenceInput>
      {/* reference to attending users of the tour  */}
      <ArrayInput source='user'>
        <SimpleFormIterator>
          <ReferenceInput
            label='Benutzer'
            source='username'
            reference='Benutzer'
          >
            {/*  TODO: get list of existing usernames to select from */}
            <SelectInput source='username' />
          </ReferenceInput>
        </SimpleFormIterator>
      </ArrayInput>
      <TextInput source='search_id' label='Touren Code' />
        <TextInput source='session_id' label='Passwort' />
      <DateInput
        source='lastEdit'
        label='letzte Bearbeitung'
        options={{ format: 'DD/MM/YYYY' }}
      />
      <NumberInput source='difficulty' label='Schwierigkeitsgrad' validate={validateDifficulty} />
      <SelectInput
        source='Status'
        choices={[
          { id: 'freigegeben', name: 'freigegeben' },
          { id: 'ausstehend', name: 'ausstehend' },
          { id: 'privat', name: 'privat' },
        ]}
      />
      {/*  TODO: model the different stations and translate them into edit Inputs*/}
      <ArrayInput source='Stationen'>
        <SimpleFormIterator>
          <TextField source='Objekt' />
          <BooleanInput source='Foto' />
          <BooleanInput source='Text' />
          <BooleanInput source='Details' />
          <TextInput source='Textfeld' />
          <ArrayInput source='Fragen'>
            <SimpleFormIterator>
              <TextInput source='Antwort' />
              <BooleanInput source='Antwort' />
            </SimpleFormIterator>
          </ArrayInput>
          <ImageInput source='Bild' />
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Edit>
);

// create a new tour
// todo: ID should not be created manually but automatically (distinct id)
export const TourenCreate = (props) => (
  <Create title='Erstelle Touren' {...props}>
    <SimpleForm>
      <TextInput disabled source='ID' />
      <TextInput source='name' label='Titel' />
      <TextInput source='description' label='Beschreibung' />
      {/*  TODO: functionality to reference to Besitzer and attending users of the tour  */}
      {/* reference to owner of the tour  */}
      <ReferenceInput label='Ersteller' source='owner' reference='Benutzer'>
        <SelectInput source='username' />
      </ReferenceInput>
      {/* reference to attending users of the tour  */}
      <ArrayInput source='user'>
        <SimpleFormIterator>
          <ReferenceInput
            label='Benutzer'
            source='username'
            reference='Benutzer'
          >
            {/*  TODO: get list of existing usernames to select from */}
            <SelectInput source='username' />
          </ReferenceInput>
        </SimpleFormIterator>
      </ArrayInput>
      <TextInput source='search_id' label='Touren Code' />
        <TextInput source='session_id' label='Passwort' />
      <DateInput
        source='lastEdit'
        label='letzte Bearbeitung'
        options={{ format: 'DD/MM/YYYY' }}
      />
      <NumberInput source='difficulty' label='Schwierigkeitsgrad' validate={validateDifficulty} />
      <SelectInput
        source='Status'
        choices={[
          { id: 'freigegeben', name: 'freigegeben' },
          { id: 'ausstehend', name: 'ausstehend' },
          { id: 'privat', name: 'privat' },
        ]}
      />
      {/*  TODO: model the different stations and translate them into edit Inputs*/}
      <ArrayInput source='Stationen'>
        <SimpleFormIterator>
          <TextField source='Objekt' />
          <BooleanInput source='Foto' />
          <BooleanInput source='Text' />
          <BooleanInput source='Details' />
          <TextInput source='Textfeld' />
          <ArrayInput source='Fragen'>
            <SimpleFormIterator>
              <TextInput source='Antwort' />
              <BooleanInput source='Antwort' />
            </SimpleFormIterator>
          </ArrayInput>
          <ImageInput source='Bild' />
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Create>
);
