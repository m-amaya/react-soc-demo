import { Flex } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const PageContainer = styled(Flex)`
  background: linear-gradient(
    to right,
    var(--chakra-colors-purple-900),
    var(--chakra-colors-purple-950),
    var(--chakra-colors-purple-900)
  );
  flex: 1;
  flex-direction: column;
`;
