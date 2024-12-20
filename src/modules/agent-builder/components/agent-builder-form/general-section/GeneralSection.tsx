import { BiLabel as GeneralIcon } from 'react-icons/bi';
import { FormSection } from '../FormSection';
import { AgentDescription } from './AgentDescription';
import { AgentNameInput } from './AgentNameInput';
import { SampleQuestions } from './SampleQuestions';

export function GeneralSection() {
  return (
    <FormSection title="General" icon={<GeneralIcon />}>
      <AgentNameInput />
      <AgentDescription />
      <SampleQuestions />
    </FormSection>
  );
}
