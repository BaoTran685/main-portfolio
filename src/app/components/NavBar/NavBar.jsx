'use client'
import React, { useState, useEffect } from 'react'
import NavLink from './NavLink'
import { ArrowDownIcon } from '@heroicons/react/16/solid'
import { motion } from 'framer-motion'

const navLinks = [
  {
    name: 'Home',
    href: '#Home'
  },
  {
    name: 'About',
    href: '#About'
  },
  {
    name: 'Experience',
    href: '#Experience'
  },
  {
    name: 'Project',
    href: '#Project'
  },
  {
    name: 'Contact',
    href: '#Contact'
  }
]
const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(0)
  const [activeSection, setActiveSection] = useState('')

  // when the section is in viewport and it is more than half of the screen, show it
  let movementTimer = null
  const TIME = 15
  const handleScroll = () => {
    const sections = document.querySelectorAll('section')
    const scrollPosition = window.scrollY
    const windowHeight = window.innerHeight
    sections.forEach(section => {
      const top = section.offsetTop
      if (scrollPosition <= top && top <= scrollPosition + windowHeight && top <= scrollPosition + windowHeight / 2) {
        setActiveSection(section.id)
      }
    })
  }
  const handleDelayScroll = () => {
    clearInterval(movementTimer)
    movementTimer = setTimeout(handleScroll, TIME)
  }
  useEffect(() => {
    document.addEventListener('scroll', handleDelayScroll)
    return () => {
      document.removeEventListener('scroll', handleDelayScroll)
    }
  }, [])
  return (
    <nav className='flex flex-row items-center justify-center fixed top-0 left-0 right-0 z-10'>
      <div className='nav--background min-w-[150px] shadow-md rounded-3xl mt-6 px-10 md:px-20 lg:px-40 py-4 md:py-6 lg:py-8'>
        <div className='block'>
          <ul className='menu hidden sm:flex flex-row space-x-4 md:space-x-6 lg:space-x-8'>
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  name={link.name}
                  href={link.href}
                  active={activeSection === link.name}
                />
              </li>
            ))}
          </ul>
          <div className='mobile-menu flex sm:hidden flex-col items-center justify-center'>
            <motion.div
              initial={false}
              animate={navbarOpen ? 'open' : 'closed'}
              className='flex flex-col items-center justify-center'
            >
              <motion.div
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
              </motion.div>
            </motion.div>

            <div className='mobile-menu-open flex sm:hidden'>
              {navbarOpen ? (
                <ul className='flex flex-col items-center justify-center space-y-2 mt-4'>
                  {navLinks.map((link, index) => (
                    <li key={index}>
                      <NavLink name={link.name} href={link.href} active={activeSection === link.name}/>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
