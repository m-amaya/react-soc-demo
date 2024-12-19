import { Button } from '@/components/cogs';
import { BiPlus as PlusIcon } from 'react-icons/bi';
import { RiRobot2Line as AiAgentIcon } from 'react-icons/ri';
import { Page } from '../../components/page';

export function AgentLibraryPage() {
  return (
    <Page
      icon={<AiAgentIcon size={24} />}
      title="AI Agents"
      subtitle="Create, manage, and deploy AI agents to accelerate your industrial tasks and workflows"
      actions={[<Button icon={<PlusIcon size={16} />}>Create agent</Button>]}
    >
      Agent Library
    </Page>
  );
}
