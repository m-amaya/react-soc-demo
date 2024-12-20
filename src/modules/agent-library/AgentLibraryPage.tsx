import { Heading } from '@chakra-ui/react';
import { RiRobot2Line as AiAgentIcon } from 'react-icons/ri';
import { Page } from '../../components/page';
import { AgentBuilderModal } from '../agent-builder';
import { PageWrapper } from './AgentLibraryPage.styled';
import { AgentsGrid, AgentsList, FilterBar } from './components';

export function AgentLibraryPage() {
  return (
    <Page
      icon={<AiAgentIcon size={24} />}
      title="AI Agents"
      subtitle="Create, manage, and deploy AI agents to accelerate your industrial tasks and workflows"
      actions={[<AgentBuilderModal key="agent-builder" />]}
    >
      <PageWrapper>
        <Heading as="h2" size="md">
          Agents
        </Heading>
        <FilterBar />
        <AgentsGrid />
        <AgentsList />
      </PageWrapper>
    </Page>
  );
}
