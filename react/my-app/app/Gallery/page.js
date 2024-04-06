"use client"
import React, { useState } from 'react'
import Header from '@/Components/Header'
import axios from 'axios'

const page = () => {

  const [Images, setImages] = useState([])
  
  const getImages = async () =>{
    const res = await axios.get("https://picsum.photos/v2/list")
    const data = res.data;
    console.log(data)
    setImages(data)
  }

  return (
    <>
    <Header/>
    <button onClick={getImages} className=' bg-black text-white m-4 px-3 py-2'>Appear</button>
    <section className='mx-4'>
    <div className=' p-10'>
    {Images.map((img , i)=>{
      return <img
        key={i}
        src={img.download_url}
        width={300}
        height={300}
        className='m-10 rounded inline-block '
      />
    })}
    </div>
    </section>

    </>
    
  )
}

export default page