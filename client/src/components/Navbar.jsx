import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { BiUserCircle } from 'react-icons/bi'


const Navbar = ({handleSideBar, show}) => {
  return (
      <header className='flex text-white justify-between items-center'>
          <div> 
    <GiHamburgerMenu
      onClick={handleSideBar}
      className={show && "hidden invisible"}
    />
          </div>
          <div>
              <p className='text-bold text-3xl'>Doc GPT</p>
          </div>
          <div>
              <BiUserCircle/>
          </div>
  </header>
  )
}

export default Navbar
