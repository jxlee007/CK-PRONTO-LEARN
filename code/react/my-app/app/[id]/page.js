"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from '@/Components/Header'

const page = ({params}) => {


  
  const {id} = params;

  const [user, setUser] = useState([])
  const getUsers = async() =>{
      const {data} = await axios.get("https://jsonplaceholder.typicode.com/users")
      setUser(data)
      // console.log(id)
      
  }
  useEffect(() => {
    getUsers()
  }, [])

  let [a, b] = useState("")
  let emoji = () => {
      // Emoji Unicode range is from 0x1F600 to 0x1F64F
      const min = 0x1F600;
      const max = 0x1F64F;

      // Generate a random Unicode code point within the emoji range
      const codePoint = Math.floor(Math.random() * (max - min + 1)) + min;

      // Convert the Unicode code point to a string
      return String.fromCodePoint(codePoint);
  }


  return (


    <>
      <Header/>
      <div className='flex flex-col justify-center items-center'>
      <h1 className=' mt-8 bg-white text-black text-[2vw]'>USER : {id}</h1>
      <span suppressHydrationWarning className='text-[15vw] ' id="emoji">{emoji()}</span>
      </div>
    </>
  )
}

export default page