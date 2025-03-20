import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Lennud from './pages/Lennud' 
import Lend from './pages/LennuBroneerimine'
import Broneeringud from './pages/Broneeringud'
import './App.css'
import './Lennud.css'
import './Broneeringud.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Lennud />} />
          <Route path="/lennud" element={<Lennud />} />
          <Route path="/lennud/:id" element={<Lend />} />
          <Route path="/broneeringud" element={<Broneeringud />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
