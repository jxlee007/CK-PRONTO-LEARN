import React from 'react'
import Link from 'next/link'

const Header = (props) => {
  return (
    <>
    <nav className='bg-green-500 px-8 py-5 flex  justify-between '>
        <span><h1>logo</h1></span>
        <span className=' gap-8 flex '>
            <Link href="/">Home</Link>
            <Link href="/Courses">Course</Link>
            <Link href="/Gallery">Gallery</Link>
        </span>

    </nav>
    </>
    
  )
}

export default Header