import { DialogTitle } from '@/components/cogs';
import { Tile } from '@/components/tile';
import { RiRobot2Line as AiAgentIcon } from 'react-icons/ri';
import { HeaderRoot } from './ModalHeader.styled';

export function ModalHeader() {
  return (
    <HeaderRoot>
      <Tile
        bg="purple.950"
        color="purple.200"
        circle
        icon={<AiAgentIcon size={16} />}
        size={24}
      />
      <DialogTitle as="h1" fontSize={16}>
        New Untitled Agent
      </DialogTitle>
    </HeaderRoot>
  );
}
