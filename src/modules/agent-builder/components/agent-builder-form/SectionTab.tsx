import { ReactNode } from 'react';
import { TabRoot } from './SectionTab.styled';

export type SectionTabProps = {
  children: ReactNode;
  icon?: ReactNode;
  selected?: boolean;
};

export function SectionTab({
  children,
  icon,
  selected = false,
}: SectionTabProps) {
  return (
    <TabRoot as="button" fontWeight="medium" $selected={selected}>
      {icon && icon} {children}
    </TabRoot>
  );
}
