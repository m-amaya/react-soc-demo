import { ReactNode } from 'react';
import { PageContainer } from './Page.styled';
import { PageContent } from './PageContent';
import { PageHeader, PageHeaderProps } from './PageHeader';

export type PageProps = PageHeaderProps & {
  children: ReactNode;
};

export function Page({ children, ...headerProps }: PageProps) {
  return (
    <PageContainer>
      <PageHeader {...headerProps} />
      <PageContent>{children}</PageContent>
    </PageContainer>
  );
}
