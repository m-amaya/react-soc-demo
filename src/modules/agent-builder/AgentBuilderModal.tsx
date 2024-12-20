import {
  Button,
  DialogContent,
  DialogRoot,
  DialogTrigger,
} from '@/components/cogs';
import { Separator } from '@chakra-ui/react';
import { BiPlus as PlusIcon } from 'react-icons/bi';
import { ModalBody, ModalFooter, ModalHeader } from './components';

export function AgentBuilderModal() {
  return (
    <DialogRoot scrollBehavior="inside" size="full">
      <DialogTrigger asChild>
        <Button icon={<PlusIcon size={16} />}>Create agent</Button>
      </DialogTrigger>
      <DialogContent>
        <ModalHeader />
        <Separator />
        <ModalBody />
        <Separator />
        <ModalFooter />
      </DialogContent>
    </DialogRoot>
  );
}
