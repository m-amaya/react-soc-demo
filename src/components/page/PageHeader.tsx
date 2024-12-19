import { Heading, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { Tile } from '../tile';
import {
  HeaderContainer,
  HeaderRoot,
  HeaderWrapper,
  PageActions,
  TextWrapper,
} from './PageHeader.styled';

export type PageHeaderProps = {
  icon: ReactNode;
  title: string;
  subtitle: string;
  actions: ReactNode[];
};

export function PageHeader({
  icon,
  title,
  subtitle,
  actions,
}: PageHeaderProps) {
  return (
    <HeaderRoot as="header" color="fg.inverted">
      <HeaderContainer centerContent maxW={1200}>
        <HeaderWrapper>
          <Tile bg="black" circle color="white" icon={icon} size={46} />
          <TextWrapper>
            <Heading as="h1" size="lg">
              {title}
            </Heading>
            <Text textStyle="sm">{subtitle}</Text>
          </TextWrapper>
        </HeaderWrapper>
        <PageActions>{actions}</PageActions>
      </HeaderContainer>
    </HeaderRoot>
  );
}
