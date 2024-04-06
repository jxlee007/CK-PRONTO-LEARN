"use client"
import React, { useState } from 'react'
import Header from '@/Components/Header'

const page = () => {
  const [username, setUsername] = useState("")
  return (
    <>
    <Header></Header>
    <div>
      <h1 className=' text-3xl px-8'>Enter your name :  </h1>
      <input type='text' className=' px-4 py-2 border-2 border-black mx-8 my-4' 
      value={username}
      onChange={(e)=>{
        setUsername(e.target.value);
        console.log(username)
      }}
      />
      <h3 className=' text-xl px-8'>Note: See in console</h3>
    </div>
    </>
    
  )
}

export default page