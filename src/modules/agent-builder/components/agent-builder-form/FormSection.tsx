import { Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { SectionHeading } from './SectionHeading';

export type FormSectionProps = {
  children: ReactNode;
  icon?: ReactNode;
  title: string;
};

export function FormSection({ children, icon, title }: FormSectionProps) {
  return (
    <Flex direction="column" gap={4}>
      <SectionHeading icon={icon}>{title}</SectionHeading>
      {children}
    </Flex>
  );
}
