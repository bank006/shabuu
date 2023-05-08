import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <h1>menu</h1>
        {/* <Link to='/Testquery'>Test..</Link> */}
        <Link to='/Home'>Home</Link>
        {/* <Link to='/Showpage'>loadprice</Link> */}
        <Link to='/'>About</Link>
        <Link to='/Showtotal' >Showtotal</Link>
    </div>
  )
}

export default Navbar