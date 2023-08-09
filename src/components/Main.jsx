import axios from 'axios'
import React, { useEffect, useState } from 'react'
import requests from '../Requests'

const Main = () => {
    const [movies,setMovies] = useState([])

    useEffect(()=>{
        axios.get(requests.requestPopular).then((Response)=>{
          setMovies(Response.data)
        })
        
    },[requests.requestPopular])
    console.log(movies)


  return (
    <div>M </div>
  )
}

export default Main