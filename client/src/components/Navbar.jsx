import React from 'react'
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
      <header className='bg-slate-200 shadow-md'>
        <div className='flex flex-wrap justify-between items-center p-4 max-w-7xl mx-auto'>
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-slate-400'>Los Santos</span>
            <span className='text-green-500'>Estates</span>
        </h1>
        <form className='bg-white p-3 rounded-lg shadow-md flex items-center'>
            <input type="text" placeholder='Search...' className='bg-transparent focus:outline-none w-24 sm:w-64'/>
            <FaSearch className='inline text-slate-400 hover:text-slate-700 duration-300'/>
        </form>
        <ul className='flex gap-6 text-sm sm:text-lg font-semibold'>
         <Link to={"/"} className='hover:text-green-500 duration-300 hidden sm:inline'>
          <li>Home</li>
         </Link>
          <Link to={"/about"} className='hover:text-green-500 duration-300 hidden sm:inline'>
            <li>About</li>
          </Link>
          <Link to={"/signin"} className='hover:text-green-500 duration-300'>
            <li>Sign In</li>
          </Link>
        </ul>
        </div>
      </header>
  )
}
