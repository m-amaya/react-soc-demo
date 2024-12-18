import { ReactNode } from 'react';

export type PageLayoutProps = {
  children: ReactNode;
};

function PageLayout({ children }: PageLayoutProps) {
  return (
    <div>
      <header>
        <h1>Page Title</h1>
      </header>
      <main>{children}</main>
      <footer>
        <p>Footer content</p>
      </footer>
    </div>
  );
}

export default PageLayout;
