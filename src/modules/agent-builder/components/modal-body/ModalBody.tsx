import { AgentBuilderForm } from '../agent-builder-form';
import { AgentPreview } from '../agent-preview';
import { BodyRoot } from './ModalBody.styled';

export function ModalBody() {
  return (
    <BodyRoot>
      <AgentBuilderForm />
      <AgentPreview />
    </BodyRoot>
  );
}
