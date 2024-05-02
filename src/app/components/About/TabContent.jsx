import React from 'react'





const TabContent = ({active, selectTab, children }) => {
  const activeButton = active ? 'text-[white] bg-[#F27121]' : 'text-[#45474B] bg-[white]'
  return (
    <button onClick={selectTab} className={`${activeButton} rounded-full px-6 py-3 sm:px-4 sm:py-2 lg:px-6 lg:py-3`}>
      <span
        className={`text--content`}
      >
        {children}
      </span>
    </button>
  )
}

export default TabContent
