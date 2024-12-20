import { Button, Field } from '@/components/cogs';
import { Flex, VStack } from '@chakra-ui/react';
import { BiPlus as PlusIcon } from 'react-icons/bi';
import { SamplePrompt } from './SamplePrompt';
import { QuestionsRoot } from './SampleQuestions.styled';

export function SampleQuestions() {
  return (
    <QuestionsRoot>
      <Field label="Sample questions" helperText="Up to 5 maximum" />
      <VStack>
        <SamplePrompt order={1} />
        <SamplePrompt order={2} />
        <SamplePrompt order={3} />
      </VStack>
      <Flex justifyContent="flex-end">
        <Button icon={<PlusIcon />} size="xs" variant="subtle">
          Add sample
        </Button>
      </Flex>
    </QuestionsRoot>
  );
}
