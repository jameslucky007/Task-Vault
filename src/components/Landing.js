import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";

const Landing = () => {
  return (
    <>
      <nav className="p-3 flex bg-white justify-between item center">
        <a href="#" id='logo' className='flex gap-2 items-center'>
        <img className='object-cover max-w-12 max-h-3/12' src="logo.svg" alt="logo" />
        <span>Task Vault</span>

        </a>
        <button className='p-2' >
    <RxHamburgerMenu /> 

        </button>
      </nav>
    </>
  )
}

export default Landing