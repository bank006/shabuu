import React from 'react'
import { Link } from 'react-router-dom'
import '../css/navbar.css'

function Navbar() {
  return (
    <div className='container1'>
      <div className='nav-bar'>
        
        <div className='title' >
          <a href='/'>menu</a>
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
          
          <Link to='/Allmodel' ></Link>
          
          <div className='slider start-home'></div>
          
        </div>
      </div>
      
        
        
        
       
    </div>
  )
}

export default Navbar