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
  BooleanField,
  ReferenceField,
  ImageField,
  //inputs
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  SimpleFormIterator,
  ArrayInput,
  ReferenceInput,
  BooleanInput,
  SelectInput,
  NumberInput
} from 'react-admin';

{/* TODO: create a Stationen field component that combines all checkpoints of a tour*/}

{/* TODO: create a Stationen input component that combines all checkpoints of a tour as array inputs*/}

export const CheckpointField = ({ record }) => {
  return (
    <Datagrid>
    <ReferenceField source='tour' reference='Touren'>
        <ChipField source='name' />
      </ReferenceField>
      <TextField source='text'/>
      <NumberField source='index'/>
      <BooleanField source='show_text'/>
      <BooleanField source='show_picture'/>
      <BooleanField source='show_details'/>
      {/* TODO: render fields from the obejcts below for the corresponding checkpoint type
      e.g. map function for rendering each image etc.
      pass the checkpoint type as a parameter */}
    </Datagrid>
  );
};

export const CheckpointInput = ({ record }) => {
  return (
    <Datagrid>
    <ReferenceInput source='tour' reference='Touren'>
        <SelectInput optionText='name' />
      </ReferenceInput>
      <TextInput source='text'/>
      <NumberInput disabled source='index'/>
      <BooleanInput source='show_text'/>
      <BooleanInput source='show_picture'/>
      <BooleanInput source='show_details'/>
      {/* TODO: render input from the obejcts below for the corresponding checkpoint type
      e.g. map function for rendering each image etc.
      pass the checkpoint type as a parameter */}
    </Datagrid>
  );
};

// model the different checkpoint objects 
export const ObjectField = ({ record }) => {
  return (
    <ReferenceField source='museum_object' reference='Exponate'>
        <ChipField source='title' />
      </ReferenceField>
  );
};

export const ObjectInput = ({ record }) => {
  return (
    <ReferenceInput source='museum_object' reference='Exponate'>
        <SelectInput optionText='title' />
      </ReferenceInput>
  );
};

export const PictureField = ({ record }) => {
  return (
    <ReferenceField source='picture' reference='Pictures'>
        <ImageField source='picture' />
      </ReferenceField>
  );
};

export const PictureInput = ({ record }) => {
  return (
    <ReferenceInput source='picture' reference='Pictures'>
        <SelectInput optionText='picture' />
      </ReferenceInput>
  );
};

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
