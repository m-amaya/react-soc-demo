import { Separator } from '@chakra-ui/react';
import { AvailabilitySection } from './availability-section';
import { FormContentRoot } from './FormContent.styled';
import { GeneralSection } from './general-section';
import { PromptingSection } from './prompting-section';
import { ToolsSection } from './tools-section';

export function FormContent() {
  return (
    <FormContentRoot>
      <GeneralSection />
      <Separator />
      <PromptingSection />
      <Separator />
      <ToolsSection />
      <Separator />
      <AvailabilitySection />
    </FormContentRoot>
  );
}
