import { Field } from '@/components/cogs';
import { Textarea } from '@chakra-ui/react';

export function AgentDescription() {
  return (
    <Field label="Description">
      <Textarea
        autoresize
        colorPalette="blue"
        placeholder="Description"
        size="sm"
      />
    </Field>
  );
}
