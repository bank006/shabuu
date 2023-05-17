import React from 'react'
import { Link } from 'react-router-dom'
import '../css/navbar.css'

function Navbar() {
  return (
    <div className='container1'>
      <div className='nav-bar'>
        
        <div className='title' >
          <h1>menu</h1>
        </div>
        
        <div className='menu'>
          
          <div for="home" className='content'>
            <Link className='onclick' to='/Home'>Home</Link>
          </div>
          <div for="about" className='content'>
            <Link className='onclick' to='/About'>About</Link>
          </div>
          <div for="showtotal" className='content'>
            <Link className='onclick' to='/Showtotal' >Showtotal</Link>
          </div>
          <div for="allmodel" className='content'>
            <Link className='onclick' to='/Allmodel' >Allmodel</Link>
          </div>
          <div className='slider start-home'></div>
          
        </div>
      </div>
      
        
        
        
       
    </div>
  )
}

export default Navbar