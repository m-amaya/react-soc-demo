import { ReactNode } from 'react';
import { HeadingRoot } from './SectionHeading.styled';

export type SectionHeadingProps = {
  children: string;
  icon?: ReactNode;
};

export function SectionHeading({ children, icon }: SectionHeadingProps) {
  return (
    <HeadingRoot as="h2" size="md">
      {icon && icon}
      {children}
    </HeadingRoot>
  );
}
