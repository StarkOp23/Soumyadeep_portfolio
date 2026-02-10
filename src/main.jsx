// src/main.jsx (Updated)
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// Add this to ensure proper rendering
const root = ReactDOM.createRoot(document.getElementById('root'))

// Use requestAnimationFrame to ensure DOM is ready
requestAnimationFrame(() => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
})