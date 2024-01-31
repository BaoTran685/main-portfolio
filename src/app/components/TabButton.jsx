import React from 'react'

const TabButton = ({ active, selectTab, children }) => {
  const buttonClass = active ? 'text-white border-b-2 lg:border-b-4 border-primary-700' : 'text-[#ADB7BE]';
  return (
    <button onClick={selectTab}>
      <p className={`mr-3 lg:mr-5 xl:mr-7 lg:text-lg xl:text-xl 2xl:text-2xl font-semibold hover:text-white ${buttonClass}`}>
        {children}
      </p>
    </button>
  )
}

export default TabButton