import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { GitHubProvider } from './context/GitHubContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GitHubProvider>
      <App />
    </GitHubProvider>
  </React.StrictMode>,
)
