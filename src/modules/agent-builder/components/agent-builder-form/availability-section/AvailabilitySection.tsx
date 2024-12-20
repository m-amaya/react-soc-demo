import { Alert, Checkbox } from '@/components/cogs';
import { CheckboxGroup, Fieldset } from '@chakra-ui/react';
import { BiMapAlt as AvailabilityIcon } from 'react-icons/bi';
import { FormSection } from '../FormSection';

export function AvailabilitySection() {
  return (
    <FormSection title="Availability" icon={<AvailabilityIcon />}>
      <Fieldset.Root>
        <CheckboxGroup colorPalette="blue">
          <Fieldset.Legend fontSize="sm" mb={2}>
            Where do you want your agent to be available when it's published?
          </Fieldset.Legend>
          <Fieldset.Content gap={3}>
            <Checkbox size="sm" value="agent-library">
              Agent library
            </Checkbox>
            <Checkbox size="sm" value="canvas">
              Canvas
            </Checkbox>
            <Checkbox size="sm" value="charts">
              Charts
            </Checkbox>
          </Fieldset.Content>
        </CheckboxGroup>
        <Alert status="info" variant="surface">
          Some tools are only supported in Charts, and might not work as
          expected in other applications.
        </Alert>
      </Fieldset.Root>
    </FormSection>
  );
}
