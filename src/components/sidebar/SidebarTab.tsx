import { Badge, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { TabContainer } from './SidebarTab.styled';

export type SidebarTabProps = {
  children: string;
  icon: ReactNode;
};

export function SidebarTab({ children, icon }: SidebarTabProps) {
  return (
    <TabContainer bg="gray.800" color="purple.300">
      {icon}
      <Text textStyle="sm">{children}</Text>
      <Badge
        bg="gray.700"
        color="white"
        fontWeight="semibold"
        size="xs"
        variant="plain"
      >
        BETA
      </Badge>
    </TabContainer>
  );
}
