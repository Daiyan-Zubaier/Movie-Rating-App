import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import { BrowserRouter } from 'react-router-dom'  // Import BrowserRouter component
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Wrap the App component in the BrowserRouter component, will let us route pages */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
