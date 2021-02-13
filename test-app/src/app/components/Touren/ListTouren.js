import React from 'react';
import {
  List,
  Datagrid,
  SingleFieldList,
  //options
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
  ReferenceArrayField,
  ReferenceManyField,
  DateField,
  NumberField,
  ChipField,
  ArrayField,
  BooleanField,
  UrlField,
  //inputs
  SelectInput,
  SearchInput,
  ReferenceInput,
  NumberInput,
  DateInput,
} from 'react-admin';
import {QuestionField, AnswerField, MultipleChoiceQuestionField, MultipleChoiceAnswerField} from './Stationen';
// material UI styles
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';

// create a range withing the Difficulty can be selected
const validateDifficulty = [
  number(),
  minValue(1, 'Bitte wähle eine Zahl zwischen 1 und 5'),
  maxValue(5, 'Bitte wähle eine Zahl zwischen 1 und 5'),
];

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
      <ReferenceInput
        source='user'
        reference='Benutzer'
        label='Ersteller'
        alwaysOn
      >
        <SelectInput optionText='username' />
      </ReferenceInput> 
      <NumberInput
        source='difficulty'
        label='Schwierigkeitsgrad'
        validate={validateDifficulty}
        alwaysOn
      />
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
          <QuestionField/>
        </Datagrid>
      </ArrayField>
    </SimpleShowLayout>
  </Show>
);

// TODO: create border to devide the component from the filters (spacing)
const useStyles = makeStyles({
  main: {
    marginTop: 20,
  },
});

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
      <Datagrid expand={<StationShow />} >
        {/* TODO: Whats the primaery key? replace Titel for pk or use built in  
        dont show id for user study 
        <TextField source='_id' label='ID' />*/}
        <TextField source='name' label='Titel' />
        <TextField source='description' label='Beschreibung' />
        {/* <ReferenceArrayField
          label='Benutzer'
          reference='Benutzer'
          source='user.username'
        >
          <SingleFieldList>
            <ChipField source='username' />
          </SingleFieldList>
        </ReferenceArrayField>
        <ReferenceField source='owner' reference='Benutzer' label='Ersteller'>
          <ChipField source='username' />
        </ReferenceField> */}
        {/* created fields for user study */}
        <TextField source='owner.username' label='Ersteller' />
        <ArrayField source='user' label='beteiligte Benutzer'>
          <SingleFieldList>
            <ChipField source='username' />
          </SingleFieldList>
        </ArrayField>
        {/* end of created fields for user study */}
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
