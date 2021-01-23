import * as React from 'react';
import {
  Show,
  SimpleShowLayout,
  TextField,
  ReferenceField,
  ChipField,
  RichTextField,
  NumberField,
} from 'react-admin';

export const FeedbackShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source='_id' label='ID' />
      <ReferenceField source='tour' reference='Touren' label='Tour'>
        <ChipField source='name' />
      </ReferenceField>
      <NumberField source='rating' label='Bewertung' />
      <RichTextField source='review' label='Rezension' />
    </SimpleShowLayout>
  </Show>
);
