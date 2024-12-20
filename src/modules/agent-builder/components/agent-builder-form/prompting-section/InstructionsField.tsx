import { Field } from '@/components/cogs';
import { Textarea } from '@chakra-ui/react';

export function InstructionsField() {
  return (
    <Field label="Instructions">
      <Textarea
        autoresize
        colorPalette="blue"
        placeholder="Instructions"
        size="sm"
      />
    </Field>
  );
}
