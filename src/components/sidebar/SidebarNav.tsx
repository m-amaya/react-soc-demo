import { RiRobot2Line as AiAgentIcon } from 'react-icons/ri';
import { SidebarTab } from './SidebarTab';

export function SidebarNav() {
  return (
    <nav>
      <SidebarTab icon={<AiAgentIcon size={16} />}>AI agents</SidebarTab>
    </nav>
  );
}
