import { PageLayout } from '@/components/page-layout';
import { Sidebar } from '@/components/sidebar';
import { AgentLibraryPage } from './modules/agent-library';

function App() {
  return (
    <PageLayout>
      <Sidebar />
      <AgentLibraryPage />
    </PageLayout>
  );
}

export default App;
