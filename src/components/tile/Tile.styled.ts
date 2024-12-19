import { Flex } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const TileContainer = styled(Flex)<{ $circle: boolean; $size: number }>`
  align-items: center;
  justify-content: center;
  border-radius: ${({ $circle }) => ($circle ? '50%' : '4px')};
  height: ${({ $size }) => $size}px;
  width: ${({ $size }) => $size}px;
`;
