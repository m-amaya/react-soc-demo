import { Field } from '@/components/cogs';
import { Input } from '@chakra-ui/react';

export function AgentNameInput() {
  return (
    <Field label="Agent name" required>
      <Input colorPalette="blue" placeholder="Name" size="sm" />
    </Field>
  );
}
