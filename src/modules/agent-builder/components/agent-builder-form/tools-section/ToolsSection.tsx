import { BiWrench as ToolsIcon } from 'react-icons/bi';
import { FormSection } from '../FormSection';
import { ToolsEmptyState } from './ToolsEmptyState';

export function ToolsSection() {
  return (
    <FormSection title="Tools" icon={<ToolsIcon />}>
      <ToolsEmptyState />
    </FormSection>
  );
}
