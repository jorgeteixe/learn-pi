import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import LearnPi from './learn-pi'

import Learn from './routes/learn'
import Practice from './routes/practice'

const container = document.getElementById('root')

const root = createRoot(container)
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LearnPi />}>
        <Route path="learn" element={<Learn />} />
        <Route path="practice" element={<Practice />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
