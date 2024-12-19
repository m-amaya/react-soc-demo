import CogniteIcon from '@/assets/cognite.svg?react';
import { Text } from '@chakra-ui/react';
import { Tile } from '../tile';
import { LogoContainer } from './Logo.styled';

export function Logo() {
  return (
    <LogoContainer>
      <Tile
        bg="purple.300"
        icon={<CogniteIcon style={{ height: 20, width: 20 }} />}
      />
      <Text textStyle="sm" fontWeight="medium">
        Atlas AI
      </Text>
    </LogoContainer>
  );
}
