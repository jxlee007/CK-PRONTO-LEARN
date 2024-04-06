"use client"
import axios from 'axios'
import React, { createContext, useState } from 'react'
export const context = createContext



const Context = ({children}) => {

    const [user, setUser] = useState([])
    const getUser = async()=>{
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/users")
        setUser(data.value)
    } 
    
  return (
    <div>
    <context.Provider value={username}>
        {children}
    </context.Provider>
    Context
    </div>
  )
}

export default Context