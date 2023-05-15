import React from 'react'
import { Link } from 'react-router-dom'
import '../css/navbar.css'

function Navbar() {
  return (
    <div className='container'>
      <div className='nav-bar'>
        <div className='title' >
          <h1>menu</h1>
        </div>
        <div className='menu'>
          <div className='content'>
            <Link to='/Home'>Home</Link>
          </div>
          <div className='content'>
            <Link to='/'>About</Link>
          </div>
          <div className='content'>
            <Link to='/Showtotal' >Showtotal</Link>
          </div>
        </div>
      </div>
      
        
        
        
       
    </div>
  )
}

export default Navbar