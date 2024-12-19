import { Text } from '@chakra-ui/react';
import { BiGlobe as ProjectIcon } from 'react-icons/bi';
import { ProjectFieldContainer } from './ProjectField.styled';

export function ProjectField() {
  return (
    <ProjectFieldContainer bg="gray.800" borderColor="gray.700">
      <ProjectIcon style={{ height: 16, width: 16 }} />
      <Text textStyle="sm" fontWeight="medium">
        ai-bluefield
      </Text>
    </ProjectFieldContainer>
  );
}
