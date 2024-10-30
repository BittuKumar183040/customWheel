import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({name, display, logo}) => {
  return (
    <Link to={`/${name}`} 
      className='parent group bg-slate-200 w-fit select-none p-2 rounded-md shadow-lg flex flex-col items-center cursor-pointer
       transform transition hover:-translate-y-3
    '>
        {logo}
        <p className='transition font-bold tracking-wide text-gray-600 '>{display}</p>
    </Link>
    )
}

export default Card