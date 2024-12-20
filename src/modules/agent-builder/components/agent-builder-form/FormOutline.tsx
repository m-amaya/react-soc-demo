import {
  BiMapAlt as AvailabilityIcon,
  BiLabel as GeneralIcon,
  BiMessageSquareDetail as PromptingIcon,
  BiWrench as ToolsIcon,
} from 'react-icons/bi';
import { FormOutlineRoot } from './FormOutline.styled';
import { SectionTab } from './SectionTab';

export function FormOutline() {
  return (
    <FormOutlineRoot>
      <SectionTab selected>All</SectionTab>
      <SectionTab icon={<GeneralIcon />}>General</SectionTab>
      <SectionTab icon={<PromptingIcon />}>Prompting</SectionTab>
      <SectionTab icon={<ToolsIcon />}>Tools</SectionTab>
      <SectionTab icon={<AvailabilityIcon />}>Availability</SectionTab>
    </FormOutlineRoot>
  );
}
