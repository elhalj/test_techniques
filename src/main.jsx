import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { TodoProvider } from './exos/test_technique/context/TodoProvider.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider1 } from './exos/jour1/context/ThemeProvider1.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <ThemeProvider1>
        <TodoProvider>
          <App />
        </TodoProvider>
      </ThemeProvider1>
    </StrictMode>
  </BrowserRouter>
)
