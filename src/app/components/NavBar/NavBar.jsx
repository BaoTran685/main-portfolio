'use client'
import React, { useState } from 'react'
import NavLink from './NavLink'
import { ArrowDownIcon } from '@heroicons/react/16/solid'
import { motion } from 'framer-motion'

const navLinks = [
  {
    name: 'Home',
    href: '#home'
  },
  {
    name: 'About',
    href: '#about'
  },
  {
    name: 'Experience',
    href: '#experience'
  },
  {
    name: 'Project',
    href: '#project'
  },
  {
    name: 'Contact',
    href: '#contact'
  }
]
const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(0)

  return (
    <>
      <nav className='flex flex-row items-center justify-center fixed top-0 left-0 right-0 z-10'>
        <div className='nav--background min-w-[150px] shadow-md rounded-3xl mt-6 px-10 md:px-20 lg:px-40 py-4 md:py-6 lg:py-8'>
          <div className='block'>
            <ul className='menu hidden sm:flex flex-row space-x-4 md:space-x-6 lg:space-x-8'>
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink name={link.name} href={link.href} />
                </li>
              ))}
            </ul>
            <div className='mobile-menu flex sm:hidden flex-col items-center justify-center'>
              <motion.div
                initial={false}
                animate={navbarOpen ? 'open' : 'closed'}
                className='flex flex-col items-center justify-center'
              >
                <motion.button
                  whileTap={{ scale: 0.97 }}
                  onClick={() => {
                    setNavbarOpen(!navbarOpen)
                  }}
                >
                  <motion.div
                    variants={{
                      open: { rotate: 180, color: '#F27121' },
                      closed: { rotate: 0, color: '#45474B' }
                    }}
                    transition={{ duration: 0.3 }}
                    style={{ originY: 0.55 }}
                  >
                    <ArrowDownIcon className='w-7 h-7' />
                  </motion.div>
                </motion.button>
              </motion.div>

              <div className='mobile-menu-open flex sm:hidden'>
                {navbarOpen ? (
                  <ul className='flex flex-col items-center justify-center space-y-2 mt-4'>
                    {navLinks.map((link, index) => (
                      <li key={index}>
                        <NavLink name={link.name} href={link.href} />
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar

{
  /* <motion.div
          initial={false}
          animate={navbarOpen ? 'open' : 'closed'}
          className='block sm:hidden w-auto'
        >
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() => {
              setNavbarOpen(!navbarOpen)
            }}
            className='mobile-menu flex flex-col items-center justify-center bg-[#fcfcfc] shadow-md rounded-3xl mt-6 px-10 md:px-20 lg:px-40 py-4 md:py-6 lg:py-8'
          >
            <motion.div
              variants={{
                open: { rotate: 180, color: '#F27121' },
                closed: { rotate: 0, color: '#45474B' }
              }}
              transition={{ duration: 0.3 }}
              style={{ originY: 0.55 }}
            >
              <ArrowDownIcon className='w-7 h-7' />
            </motion.div>
          </motion.button>

          <ul
            style={{ pointerEvents: navbarOpen ? 'auto' : 'none' }}
            className='mobile-menu-open flex flex-col items-center justify-center bg-[#fcfcfc] shadow-md rounded-3xl space-y-3 mt-3 px-2 py-4'
          >
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink name={link.name} href={link.href} />
              </li>
            ))}
          </ul>
        </motion.div> */
}
