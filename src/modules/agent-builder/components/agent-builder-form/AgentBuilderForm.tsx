import { FormRoot } from './AgentBuilderForm.styled';
import { FormContent } from './FormContent';
import { FormOutline } from './FormOutline';

export function AgentBuilderForm() {
  return (
    <FormRoot>
      <FormOutline />
      <FormContent />
    </FormRoot>
  );
}
