import { PageLayout } from '@/components/page-layout';
import { Sidebar } from '@/components/sidebar';

function App() {
  return (
    <PageLayout>
      <Sidebar />
      <div>content</div>
    </PageLayout>
  );
}

export default App;
