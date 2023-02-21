import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {

  const nav_active = {
    color: 'black',
    fontWeight: 400,
    borderBottom: '2px solid red'
  }

  const nav_link = [
    {
      path: '/',
      display: 'Home'
    },
    {
      path: 'offers',
      display: 'Offer'
    },
    {
      path: 'signin',
      display: 'SignIn'
    },
  ]

  return (
    <div className="bg-white border-b shadow-sm sticky top-0 left-0 right-0 z-50">
      <div className='header_container max-w-6xl mx-auto px-3'>
      <div className="nav_container flex items-center justify-between">
        <div className="logo flex gap-2 items-center cursor-pointer">
          <span className='text-red-500 text-2xl'><i class="ri-home-3-fill"></i></span>
          <div className="logo_text flex flex-col gap-0">
          <NavLink to='/'>
          <h2 className='text-red-500 font-bold'>Dave<span className='text-black'>Agency</span></h2>
          <small className='-mt-1.5 italic font-semibold'>Reliable & Affordable</small>
          </NavLink>
          </div>
        </div>
        <ul className="flex items-center space-x-10 text-gray-700 ">
       {
        nav_link.map((item, index) => (
          <NavLink key={index} style={(navItem) => navItem.isActive ? nav_active : null} className="py-3 text-gray-400 hover: ease-in-out transition-all .7s cursor-pointer" to={item.path}>{item.display}</NavLink>
        ))
       }
        </ul>
      </div>
     
    </div>
    </div>
  )
}

export default Header