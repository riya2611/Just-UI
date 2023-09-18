import React from 'react'
import logo from '../assets/logo.jpeg'
import {GrClose} from 'react-icons/gr'

const Header = ({show,handleSideBar}) => {
  return (
      <div className={show?'sidebar active':'sidebar' }>
          <img src={logo} alt="" className='logo' />
          <ul className='flex flex-col items-center text-white'>
              <li>
                  <a href="/">Home</a>
              </li>
              <li>
                  <a href="/">About us</a>
              </li>
              <li>
                  <a href="/">Contact Us</a>
              </li>
              <li >
                  <GrClose onClick={handleSideBar} size={"2rem"} />
              </li>
      </ul>
    </div>
  )
}

export default Header
