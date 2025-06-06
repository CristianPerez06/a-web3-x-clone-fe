import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import App from './App.tsx';

import './main.scss';


const client = new QueryClient();

createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={client}>
      <App />
    </QueryClientProvider>
);
