'use client'
import React, { useState } from 'react'
import NavLink from './NavLink'
import { motion } from 'framer-motion'

import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/16/solid'

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

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 20 }
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.6 } }
}
const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(0)

  return (
    <>
      <nav className='flex flex-row items-center justify-center fixed top-0 left-0 right-0 z-10'>
        <div className='hidden sm:flex bg-[#fcfcfc] shadow-md rounded-3xl mt-6 px-10 md:px-20 lg:px-40 py-4 md:py-6 lg:py-8'>
          <div className='block w-auto'>
            <ul className='menu flex flex-row space-x-4 md:space-x-6 lg:space-x-8'>
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink name={link.name} href={link.href} />
                </li>
              ))}
            </ul>

          </div>
        </div>
        <motion.div
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

          <motion.ul
            variants={{
              open: {
                clipPath: 'inset(0% 0% 0% 0% round 10px)',
                transition: {
                  type: 'spring',
                  bounce: 0.1,
                  duration: 0.7,
                  delayChildren: 0.3,
                  staggerChildren: 0.05
                }
              },
              closed: {
                clipPath: 'inset(10% 50% 90% 50% round 10px)',
                transition: {
                  type: 'spring',
                  bounce: 0.1,
                  duration: 0.3
                }
              }
            }}
            style={{ pointerEvents: navbarOpen ? 'auto' : 'none' }}
            className='mobile-menu-open flex flex-col items-center justify-center bg-[#fcfcfc] shadow-md rounded-3xl space-y-3 mt-3 px-2 py-4'
          >
            {navLinks.map((link, index) => (
              <motion.li key={index} variants={itemVariants}>
                <NavLink name={link.name} href={link.href} />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </nav>
    </>
  )
}

export default NavBar
/* <div className='mobile-menu flex sm:hidden flex-col items-center justify-center'>
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
            </div> */