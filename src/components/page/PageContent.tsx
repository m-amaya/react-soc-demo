import { ReactNode } from 'react';
import { ContentContainer, ContentRoot } from './PageContent.styled';

export type PageContentProps = {
  children: ReactNode;
};

export function PageContent({ children }: PageContentProps) {
  return (
    <ContentRoot as="main" bg="white">
      <ContentContainer maxW={1200}>{children}</ContentContainer>
    </ContentRoot>
  );
}
