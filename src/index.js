import { render } from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import App from './app'
import Learn from './routes/learn'
import Practice from './routes/practice'

const rootElement = document.getElementById('root')
render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='learn' element={<Learn />} />
        <Route path='practice' element={<Practice />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
)
