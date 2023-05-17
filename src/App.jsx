import {React, useState} from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Showpage from './pages/Showpage'
import Home from './pages/Home'
import Navbar from './pages/Navbar'

import About from './pages/About'
import './App.css'
import Showtotal from './pages/Showtotal'
import Testquery from './pages/Testquery'

function App() {
  return (
    <div className='contents'>
     
      <div className='main1'>
      
        <BrowserRouter>
        <Navbar/>
        <div className="main">
          <Routes>
            {/* <Route path='/Testquery' element={<Testquery/>}/> */}
            <Route path='/Home' element={<Home/>}/>
            {/* <Route path='/Showpage' element={<Showpage/>}/> */}
            <Route path='/' element={<About/>}/>
            <Route path='/Showtotal' element={<Showtotal/>}/>
          </Routes>
        </div>
        </BrowserRouter>
        {/* <Showtotal/> */}
      </div>

    </div>
  )
}

export default App