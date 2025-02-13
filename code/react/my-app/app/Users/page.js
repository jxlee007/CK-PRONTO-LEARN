"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from '@/Components/Header'
import Link from 'next/link'
import { toast } from 'react-toastify'


const page = () => {

  const notify = () => {toast("login successful")} 

    const [user, setUser] = useState([])
    const getUsers = async() =>{
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/users")
        setUser(data)
        
    }
    useEffect(() => {
      getUsers()
    }, [])
    
  return (
    <>
    <Header/>
    <div className='m-8'>
        <ul className='p-4 bg-amber-700 text-white'>
            {user.map((e)=>{
                return <li>{e.username} --- <Link onClick={notify} href={`${e.id}`}>Explore</Link> </li>
            })}
        </ul>
    </div>
    </>
    
  )
}

export default page