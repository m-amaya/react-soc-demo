import { Button, EmptyState } from '@/components/cogs';
import { Flex } from '@chakra-ui/react';
import { BiPlus as PlusIcon } from 'react-icons/bi';
import { ImCogs as CogsIcon } from 'react-icons/im';

export function ToolsEmptyState() {
  return (
    <Flex alignItems="center" direction="column">
      <EmptyState
        icon={<CogsIcon />}
        title="Add tools to your agent"
        description="Tools give your agent the ability to perform tasks."
      />
      <Button
        focusRingColor="blue.focusRing"
        icon={<PlusIcon />}
        size="sm"
        variant="subtle"
        width="fit-content"
      >
        Add tool
      </Button>
    </Flex>
  );
}
