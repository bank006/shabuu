import { useState } from 'react'
import  {BrowserRouter, NavLink ,Route , Routes, Link, useNavigate}  from 'react-router-dom'
import DataTable from 'react-data-table-component';
import Axios from 'axios'
import '../css/home.css'


function Home() {

  const [pricet , setprice]=useState("");
  const[time_start,settime_start]=useState("");

  


  const[pricelist,setpricelist] = useState([]);

  const getprice = () => {
   
    Axios.get('http://localhost:3001/api/getdtall').then((Response)=>{
      setpricelist(Response.data);

    });
  }

  

  const addprice = () => {
    Axios.post('http://localhost:3001/create',{
      pricet:pricet,
      time_start:time_start
    }).then(() => {
      setpricelist[(
        pricelist,
        {
          pricet:pricet,
          time_start:time_start
        }
      )]
    })
  }


  return (
   
   <div className="container">
    <form action="" >
      <div className="mb-1">
        <label htmlFor="price" className="formlabel">
          price:
        </label>
        <input type="number"  className="form-control"
        onChange={(event)=>{
          setprice(event.target.value)
        }}  />
      </div>
      <div className="mb-1">
        <label htmlFor="price" className="formlabel">
          date:
        </label>
        <input type="date"  className="form-control" 
        onChange={(event)=>{
          settime_start(event.target.value)
        }}  />
      </div>
      <button type="submit" onClick={addprice} >submit</button>
    </form>
    <hr />
    <div className='Submit-Lprice'>
      <button type="submit" onClick={getprice}>show price</button>
      {pricelist.map((val, key)=>{
        return (
          <div className="price card">
            <div className="card-body text-left">
              <p className='card-text'>price:{val.id}</p>
              <p className='card-text'>price:{val.pricet}</p>
              <p className='card-text'>price:{val.time_start}</p>
              
            </div>

          </div>
        )
      })}

    </div>
   </div>
 
   

   
  );
}

export default Home
