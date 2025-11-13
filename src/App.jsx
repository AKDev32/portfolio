import Home  from './Pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './Pages/NotFound'
import { Toaster } from './components/ui/toaster'

const App = () => {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index  element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App