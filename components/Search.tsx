import React from 'react'
import { FiSearch, FiX } from 'react-icons/fi';

const Search = () => {
  return (
    <div className="flex flex-row h-10 m-10 font-poppins">
    <input 
    className="p-2 rounded-xl bg-transparent text-white border-[1px] border-white text-sm focus:outline-none absolute bottom-4 right-14"
    type="search" 
    name="search" 
    placeholder="Search by keyword..."
    />
    <button type="submit" className="md:block">
    <FiSearch className="text-white hover:text-blue-500 text-2xl ml-2 transition-all duration-700 absolute bottom-6 right-6" />
    </button>
    </div>
  )
}

export default Search