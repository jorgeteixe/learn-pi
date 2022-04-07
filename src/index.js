import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './app'
import './index.css'

import Learn from './routes/learn'
import Practice from './routes/practice'

const container = document.getElementById('root')

const root = createRoot(container)
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="learn" element={<Learn />} />
        <Route path="practice" element={<Practice />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
