import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Lennud from './pages/Lennud' 
import Broneeringud from './pages/Broneeringud'
import './App.css'
import './Lennud.css'
import './Broneeringud.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Lennud />}>
            <Route path="/lennud" element={<Lennud />} />
            <Route path="/broneeringud" element={<Broneeringud />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
