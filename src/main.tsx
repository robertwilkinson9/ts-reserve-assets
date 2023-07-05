import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.tsx'

import './index.css'

//console.log("MAIN: process.argv.length is ")
//console.log(process.argv.length)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
