import {
  Field,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from '@/components/cogs';
import { createListCollection } from '@chakra-ui/react';

const llms = createListCollection({
  items: [{ label: 'gpt-4o-mini', value: 'gpt-4o-mini' }],
});

export function LanguageModelSelect() {
  return (
    <Field helperText="Learn more about available models in the Model Library.">
      <SelectRoot collection={llms} colorPalette="blue" size="sm">
        <SelectLabel>Language model</SelectLabel>
        <SelectTrigger>
          <SelectValueText placeholder="Select language model" />
        </SelectTrigger>
        <SelectContent>
          {llms.items.map(llm => (
            <SelectItem item={llm} key={llm.value}>
              {llm.label}
            </SelectItem>
          ))}
        </SelectContent>
      </SelectRoot>
    </Field>
  );
}
