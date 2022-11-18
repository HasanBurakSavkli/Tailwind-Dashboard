import React from 'react'
import { RiSearchLine } from "react-icons/ri";

const Header = () => {
  return (
    <header className='flex flex-col md:flex-row md:justify-between items-center gap-4'>
        <h1 className='text-2xl md:text-3xl font-bold'>😀 Good morning, <span className='text-indigo-900'>Jorge</span></h1>
        <form className='relative w-full md:w-auto'>
            <RiSearchLine className='absolute top-3 left-2'/>
            <input className='bg-gray-300 py-2 pl-8 pr-4 rounded-lg text-gray-900 outline-none w-full md:w-auto' type="text" placeholder='Search for projects'/>
        </form>
    </header>
  )
}

export default Header