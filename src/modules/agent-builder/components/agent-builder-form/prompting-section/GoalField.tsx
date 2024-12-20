import { Field } from '@/components/cogs';
import { Textarea } from '@chakra-ui/react';

export function GoalField() {
  return (
    <Field label="Goal">
      <Textarea autoresize colorPalette="blue" placeholder="Goal" size="sm" />
    </Field>
  );
}
