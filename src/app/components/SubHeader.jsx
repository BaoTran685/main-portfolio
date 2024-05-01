'use client'
import React, { useState, useLayoutEffect, useRef } from 'react'

const mdWidth = 768
const SubHeader = ({ children }) => {
  const targetRef = useRef()
  const [dimension, setDimension] = useState({ width: 0 })
  let movementTimer = null
  const TIME = 100

  const handleDimensionChange = () => {
    if (targetRef.current) {
      const windowWidth = window.innerWidth
      if (windowWidth >= mdWidth) {
        setDimension({ width: targetRef.current.offsetWidth + 20 })
      } else {
        setDimension({ width: targetRef.current.offsetWidth })
      }
    }
  }
  useLayoutEffect(() => {
    handleDimensionChange()
  }, [])
  window.addEventListener('resize', () => {
    clearInterval(movementTimer)
    movementTimer = setTimeout(handleDimensionChange, TIME)
  })
  return (
    <>
      <h2
        ref={targetRef}
        className='text--header text-transparent bg-clip-text header--background--dark'
      >
        {children}
      </h2>
      <div
        style={dimension}
        className='w-fit h-1 bg-[#E94057] rounded-md mt-0.5 md:mt-1'
      />
    </>
  )
}

export default SubHeader
