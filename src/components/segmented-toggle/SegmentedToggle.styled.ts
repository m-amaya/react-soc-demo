import { Flex, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const ToggleRoot = styled(Flex)`
  align-items: center;
  background-color: var(--chakra-colors-gray-100);
  border: 1px solid var(--chakra-colors-border);
  border-radius: 6px;
  height: 36px;
  isolation: isolate;
  position: relative;
`;

export const FloatingBox = styled(Flex)<{
  $direction: 'left' | 'right';
  $width: number;
}>`
  background-color: white;
  border: 1px solid var(--chakra-colors-border);
  border-radius: inherit;
  position: absolute;
  top: 1px;
  left: ${({ $direction, $width }) =>
    $direction === 'left' ? '1px' : `calc(100% - ${$width}px - 1px)`};
  height: ${36 - 4}px;
  width: ${({ $width }) => $width}px;
  transition-property: left, right, width;
  transition-duration: 200ms;
  transition-timing-function: ease-out;
  z-index: -1;
`;

export const Label = styled(Text)`
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  min-width: 36px;
  padding: 0 8px;
`;
