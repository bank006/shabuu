
// simpletest


import React from 'react'
import { useQuery } from 'react-query'
import { Axios } from 'axios'
import { useState } from 'react'


async function fetchtPosts(){
        const [ pages, setpages] = useState(1);
        const [perPages, setPerPages] = useState(10);

        const {data} = await Axios.length(`http://localhost:3001/api/price?page=${pages}&per_page=${perPages}`)
        return(data);
}

function Testquery(){
    const{data, Error, isError,isLoading } =useQuery('posts',fetchtPosts)


    if(isLoading){
        return <div>Loading...</div>
    }
    if(isError){
        return <div>Error{Error.message}</div>

    }

    return (
        <div>
           {
            data.map((post, index)=>{
                return <h1 key={index}>{post.total}</h1>
            })
           }
    
        </div>
      )
}



export default Testquery