import { InputGroup } from '@/components/cogs';
import { HStack, IconButton, Input, Text } from '@chakra-ui/react';
import { BiX as DeleteIcon } from 'react-icons/bi';

export type SamplePromptProps = {
  order: number;
};

export function SamplePrompt({ order }: SamplePromptProps) {
  return (
    <HStack gap={2} width="full">
      <InputGroup
        colorPalette="blue"
        flex={1}
        startElement={<Text>{order}</Text>}
      >
        <Input placeholder="Sample prompt" size="sm" />
      </InputGroup>
      <IconButton
        aria-label="Delete"
        colorPalette="red"
        size="sm"
        variant="ghost"
      >
        <DeleteIcon style={{ height: 20, width: 20 }} />
      </IconButton>
    </HStack>
  );
}
