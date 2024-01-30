'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import NavLink from './NavLink'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/16/solid'

const navLinks = [
  {
    name: 'About',
    href: '#about'
  },
  {
    name: 'Projects',
    href: '#projects'
  },
  {
    name: 'Contact',
    href: '#contact'
  }
]
const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-95'>
      <div className='flex flex-wrap items-center justify-between mx-auto px-4 py-3 md:px-6 md:py-5'>
        <Link
          href='/'
          className='text-white text-2xl sm:text-3xl md:text-5xl font-semibold'
        >
          LOGO
        </Link>
        <div className='mobile-menu block md:hidden'>
          {!navbarOpen ? (
            <button
              onClick={() => {
                setNavbarOpen(true)
              }}
              className='flex items-center px-3 py-2 text-slate-300 hover:text-white'
            >
              <Bars3Icon className='w-7 h-7' />
            </button>
          ) : (
            <button
              onClick={() => {
                setNavbarOpen(false)
              }}
              className='flex items-center px-3 py-2 text-slate-300 hover:text-white'
            >
              <XMarkIcon className='w-7 h-7' />
            </button>
          )}
        </div>
        <div className='menu hidden md:block md:w-auto' id='menu'>
          <ul className='flex p-4 md:flex-row md:p-0 md:space-x-8'>
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink name={link.name} href={link.href} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='menu-mobile-open md:hidden'>
        {navbarOpen && (
          <ul className='flex flex-col py-1 items-center'>
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink name={link.name} href={link.href} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  )
}

export default NavBar
