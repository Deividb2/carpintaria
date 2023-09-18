import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'

import Home from './assets/paginas/Home'
import QuemSomos from './assets/paginas/QuemSomos'
import Servicos from './assets/paginas/Servicos'
import ComoTrabalhamos from './assets/paginas/ComoTrabalhamos'
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
        <Route path='/produtos' element={<Servicos />} />
      </Routes>

      <Routes>
        <Route path='/comoTrabalhamos' element={<ComoTrabalhamos />} />
      </Routes>

      <Routes>
        <Route path='/contato' element={<Contato />} />
      </Routes>
    </Router>
  )
}