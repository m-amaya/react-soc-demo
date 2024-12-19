import { Provider } from '@/components/cogs';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider forcedTheme="light">
      <App />
    </Provider>
  </StrictMode>,
);
