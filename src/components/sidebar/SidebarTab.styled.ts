import { Flex } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const TabContainer = styled(Flex)`
  align-items: center;
  gap: 12px;
  padding: 8px 20px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background-color: var(--chakra-colors-purple-300);
    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px;
    display: block;
    height: 100%;
    width: 4px;
  }
`;
