import React from 'react'
import Home from './Home'
import About from './About'
import Showtotal from './Showtotal'
import '../css/allmodel.css'



function Allmodel() {
  return (
    <div className='packct'> 
        <div className="pktent">
             <Home/>
        </div> 
        <div className="pktent">
            <Showtotal/>
        </div> 
        <div className="pktent">
            <About/>   
        </div>     
    </div>
  )
}

export default Allmodel