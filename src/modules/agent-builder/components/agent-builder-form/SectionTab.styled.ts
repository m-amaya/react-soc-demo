import { Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const TabRoot = styled(Text)<{ $selected: boolean }>`
  align-items: center;
  background-color: ${({ $selected }) =>
    $selected ? 'var(--chakra-colors-bg-info)' : 'transparent'};
  border-radius: 6px;
  color: ${({ $selected }) =>
    $selected
      ? 'var(--chakra-colors-fg-info)'
      : 'var(--chakra-colors-fg-muted)'};
  cursor: pointer;
  display: flex;
  gap: 8px;
  padding: 8px 16px;
  transition-property: background-color, color;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;

  &:hover {
    background-color: ${({ $selected }) =>
      $selected
        ? 'var(--chakra-colors-bg-info)'
        : 'var(--chakra-colors-gray-100)'};
  }

  &:active {
    background-color: ${({ $selected }) =>
      $selected
        ? 'var(--chakra-colors-bg-info)'
        : 'var(--chakra-colors-gray-200)'};
  }
`;
