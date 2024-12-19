import { Container, Flex } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const HeaderRoot = styled(Flex)`
  min-height: 110px;
  justify-content: center;
`;

export const HeaderContainer = styled(Container)`
  flex-direction: row;
  justify-content: space-between;
  margin: 16px 24px;
`;

export const HeaderWrapper = styled(Flex)`
  gap: 12px;
`;

export const TextWrapper = styled(Flex)`
  flex: 1;
  flex-direction: column;
`;

export const PageActions = styled(Flex)``;
