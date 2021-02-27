import React from 'react';
import {
  Filter,
  //validation
  minValue,
  maxValue,
  number,
  //inputs
  SelectInput,
  SearchInput,
  ReferenceInput,
  NumberInput,
  DateInput,
} from 'react-admin';
// material UI styles
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

// create a range withing the Difficulty can be selected
const validateDifficulty = [
  number(),
  minValue(1, 'Bitte wähle eine Zahl zwischen 1 und 5'),
  maxValue(5, 'Bitte wähle eine Zahl zwischen 1 und 5'),
];

export const FilterBar = (props) => (
  <div>
    <Filter {...props}>
      <SearchInput source='q' alwaysOn  placeholder="Suche"/>
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
