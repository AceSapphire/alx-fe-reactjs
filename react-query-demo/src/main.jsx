import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// ✅ Import React Query
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// ✅ Create a client
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* ✅ Wrap App in QueryClientProvider */}
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
)
