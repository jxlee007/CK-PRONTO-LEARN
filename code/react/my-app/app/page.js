"use client"
import React, { useState } from 'react'
import Header from '@/Components/Header'
import Link from 'next/link'

const page = () => {
  let [marks, setMarks] = useState(33)
  const [user, setUser] = useState("JSM")
  return (
    <>
    <Header user={user}>{user}</Header>
    <div className=" mx-8 my-2 px-4 py-2 border-2 border-black ">
      <h1>the page number is {marks}</h1>
      <button onClick={() => {
        marks = setMarks(Math.floor(Math.random()*100))
      }} className='px-5 py-2 bg-green-400 text-white rounded-xl'>update number</button>

    </div>
    <div className=" mx-8 my-2 px-4 py-2 border-2 border-black flex flex-col">
      <Link href="/Two-way-bind">Explore --- Bind-2-way </Link>
      <Link href="/Users">Explore --- Dynamic app routing (user:id) </Link>

    </div>
    </>
    


  )
}

export default page