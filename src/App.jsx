import {React, useState} from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Showpage from './pages/Showpage'
import Home from './pages/Home'
import Navbar from './pages/Navbar'

import About from './pages/About'
import './App.css'
import Showtotal from './pages/Showtotal'
import Testquery from './pages/Testquery'
import Allmodel from './pages/Allmodel'

function App() {
  return (
    <div className='contents'>
     
      <div className='main1'>
      
        <BrowserRouter>
        <Navbar/>
        
        <div className="main">
          <Routes>
            <Route  path='/Home' element={<Home/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Showtotal' element={<Showtotal/>}/>
            <Route path='/' element={<Allmodel/>}/>
          </Routes>
        </div>
        </BrowserRouter>
      </div>

    </div>
  )
}

export default App