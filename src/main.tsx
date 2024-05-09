import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { QueryClientProvider } from '@tanstack/react-query'
import queryClient from './api/utils.ts'
import OauthReducer from './components/reducers/OauthReducer/OauthReducer.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <OauthReducer>
        <App />
      </OauthReducer>
    </QueryClientProvider>
  </React.StrictMode>,
)
