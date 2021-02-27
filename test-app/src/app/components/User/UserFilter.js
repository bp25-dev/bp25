import React from 'react';
import {
  Filter,
  SearchInput,
  NullableBooleanInput,
  ReferenceInput,
  SelectInput,
} from 'react-admin';

export const UserFilterBar = (props) => (
    <div>
      <Filter {...props}>
        <SearchInput source='q' alwaysOn placeholder='Suche'/>
        <NullableBooleanInput
          label='Benutzertyp'
          source='Adminrechte'
          nullLabel='alle Benutzer'
          falseLabel='Benutzer'
          trueLabel='Administator'
          alwaysOn
        />
        <ReferenceInput
          source='username'
          label='Erstellte Touren'
          reference='Touren'
          allowEmpty
          alwaysOn
        >
          <SelectInput optionText='name' />
        </ReferenceInput>
      </Filter>
    </div>
  );