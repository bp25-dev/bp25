import { TextField } from '@material-ui/core';
import React from 'react';
import {
  //fields
  Datagrid,
  SingleFieldList,
  ReferenceArrayField,
  ChipField,
  ArrayField,
  NumberField,
  ReferenceField,
  //inputs
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  SimpleFormIterator,
  ArrayInput,
  ReferenceInput,
  NumberInput
} from 'react-admin';

export const QuestionField = ({ record }) => {
  return (
    <Datagrid>
      <TextField source='question' label='Frage' />
      <ReferenceArrayField
        label='verlinkte Objekte'
        reference='Exponate'
        source='linked_objects'
      >
        <SingleFieldList>
          <ChipField source='title' />
        </SingleFieldList>
      </ReferenceArrayField>
    </Datagrid>
  );
};

export const QuestionInput = ({ record }) => {
  return (
    <span>
      <TextInput source='question' label='Frage' />
      <ReferenceArrayInput
        label='verlinkte Objekte'
        reference='Exponate'
        source='linked_objects'
        sort={{ field: 'title', order: 'ASC' }}
      >
        <SelectArrayInput optionText='title' />
      </ReferenceArrayInput>
    </span>
  );
};

export const AnswerField = ({ record }) => {
  return (
    <Datagrid>
      <TextField source='answer' label='Antwort' />
      <ReferenceArrayField
        label='verlinkte User'
        reference='User'
        source='user'
      >
        <SingleFieldList>
          <ChipField source='username' />
        </SingleFieldList>
      </ReferenceArrayField>
    </Datagrid>
  );
};

export const AnswerInput = ({ record }) => {
  return (
    <span>
      <TextInput source='answer' label='Antwort' />
      <ReferenceArrayInput
        label='verlinkte User'
        reference='User'
        source='user'
      >
        <SelectArrayInput optionText='username' />
      </ReferenceArrayInput>
    </span>
  );
};

export const MultipleChoiceQuestionField = ({ record }) => {
  return (
    <Datagrid>
      <ArrayField>
        <Datagrid>
          <TextField source='possible_answers' />
        </Datagrid>
      </ArrayField>
      <ArrayField>
        <Datagrid>
          <NumberField source='correct_answers' />
        </Datagrid>
      </ArrayField>
      <NumberField source='max_choices' />
    </Datagrid>
  );
};

export const MultipleChoiceAnswerField = ({ record }) => {
  return (
    <Datagrid>
      <ReferenceField source='question' reference='MultipleChoiceQuestions'>
        <MultipleChoiceQuestionField />
      </ReferenceField>
      <ArrayField>
        <Datagrid>
          <NumberField source='answer' />
        </Datagrid>
      </ArrayField>
    </Datagrid>
  );
};

export const MultipleChoiceQuestionInput = ({ record }) => {
  return (
    <span>
      <ArrayInput>
        <SimpleFormIterator>
          <TextInput source='possible_answers' />
        </SimpleFormIterator>
      </ArrayInput>
      <ArrayInput>
        <SimpleFormIterator>
          <TextInput source='correct_answers' />
        </SimpleFormIterator>
      </ArrayInput>
      <NumberInput source='max_choices' />
    </span>
  );
};

export const MultipleChoiceAnswerInput = ({ record }) => {
  return (
    <span>
      <ArrayInput>
        <ReferenceInput>
          <MultipleChoiceQuestionInput />
        </ReferenceInput>
      </ArrayInput>
      <ArrayInput>
        <SimpleFormIterator>
          <NumberInput source='answer' />
        </SimpleFormIterator>
      </ArrayInput>
    </span>
  );
};
