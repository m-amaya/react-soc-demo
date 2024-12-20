import { BiMessageSquareDetail as PromptingIcon } from 'react-icons/bi';
import { FormSection } from '../FormSection';
import { GoalField } from './GoalField';
import { InstructionsField } from './InstructionsField';
import { LanguageModelSelect } from './LanguageModelSelect';

export function PromptingSection() {
  return (
    <FormSection title="Prompting" icon={<PromptingIcon />}>
      <LanguageModelSelect />
      <GoalField />
      <InstructionsField />
    </FormSection>
  );
}
