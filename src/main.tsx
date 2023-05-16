import React from 'react'
import ReactDOM from 'react-dom/client'
{ /*
import Testapp from './components/testapp.tsx'
*/ }

import App from './App.tsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
{ /*
    <Testapp />
*/ }
    <App />
  </React.StrictMode>,
)
