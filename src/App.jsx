import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'

import Home from './assets/paginas/Home'
import QuemSomos from './assets/paginas/QuemSomos'
import Servicos from './assets/paginas/Servicos'
import Galeria from './assets/paginas/Galeria'
import Contato from './assets/paginas/Contato'

export default function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>

      <Routes>
        <Route path='/quem-somos' element={<QuemSomos />} />
      </Routes>

      <Routes>
        <Route path='/servicos' element={<Servicos />} />
      </Routes>

      <Routes>
        <Route path='/galeria' element={<Galeria />} />
      </Routes>

      <Routes>
        <Route path='/contato' element={<Contato />} />
      </Routes>
    </Router>
  )
}