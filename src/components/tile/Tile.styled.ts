import { Flex } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const TileContainer = styled(Flex)<{ $size: number }>`
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  height: ${({ $size }) => $size}px;
  width: ${({ $size }) => $size}px;
`;
