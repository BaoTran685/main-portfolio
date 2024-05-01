import React from 'react'

const TabContent = ({active, selectTab, children }) => {
  const activeButton = active ? 'text-[#F27121]' : 'text-[#636b70]'
  return (
    <button onClick={selectTab}>
      <span
        className={`text--sub--header hover--text--transition--color ${activeButton}`}
      >
        {children}
      </span>
    </button>
  )
}

export default TabContent
