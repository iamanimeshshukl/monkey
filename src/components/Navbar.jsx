import React, { useState } from 'react'
import { Button } from "@material-tailwind/react";

import { signOut } from 'firebase/auth'
import { database } from '../Firebase'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const history = useNavigate()
   const handelClick = ()=>{
     signOut(database).then(val=>{
      console.log(val,"val")
           history('/')
     })
}

  return (
   <>
  <div className="relative  bg-yellow-500">
  <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
    <div className="inline-flex items-center space-x-2">
    <img
          width="7%"
          height="2%"
          viewBox="0 0 50 56"
          fill="none"
          src="https://images.vexels.com/media/users/3/229303/isolated/preview/82ac98287e375fd8be833c9190b51fb1-running-monkey-logo.png"
        >
        </img>
      <div className="text-3xl">Monkey</div>
    
    <div className="hidden grow items-start lg:flex">
      <ul className="ml-12 inline-flex space-x-8">
        <li>
          <a
            href="/home"
            className="text-sm font-semibold text-gray-800 hover:text-gray-900"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="/premium"
            className="text-sm font-semibold text-gray-800 hover:text-gray-900"
          >
            Premium
          </a>
        </li>
        <li>
          <a
            href="/contact"
            className="text-sm font-semibold text-gray-800 hover:text-gray-900"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
    </div>
   
    <div>
    <div className="hidden lg:block">
    <Button onClick={handelClick} className='bg-blue-500 text-white rounded-full'>Log Out</Button>
    </div>
    </div>
    <div className="lg:hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="h-6 w-6 cursor-pointer"
      >
        <line x1="4" y1="12" x2="20" y2="12"></line>
        <line x1="4" y1="6" x2="20" y2="6"></line>
        <line x1="4" y1="18" x2="20" y2="18"></line>
      </svg>
    </div>
  </div>
</div>

   </>
  )
  }
export default Home
