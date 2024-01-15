import React from 'react'
import axios from 'axios'
import { useState } from 'react'

export default function Home() {
    const [msage,setMsage]=useState("")
    const getmsg=()=>{
        axios.get("http://localhost:4000/home")
        .then((res)=>{
            console.log(res.data)
            setMsage(res.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }
  return (
    <div>
      <button onClick={getmsg}>click</button>
      {

        
        msage && <h1>{msage}</h1>
      }
    </div>
  )
}
