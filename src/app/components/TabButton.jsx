import React from 'react';
import {motion} from "framer-motion";

const tabVariants = {
  default: { width: 0},
  active: {width: "calc(100% - 0.85rem"} 
}
const TabButton = ({ active, selectTab, children }) => {
  const buttonClass = active ? 'text-white' : 'text-[#ADB7BE]';
  return (
    <button onClick={selectTab}>
      <p className={`mr-3 lg:mr-5 xl:mr-7 lg:text-lg xl:text-xl 2xl:text-2xl font-semibold hover:text-white ${buttonClass}`}>
        {children}
      </p>
      <motion.div variants={tabVariants} animate={active ? "active" : "default"} className='h-0.5 md:h-1 bg-primary-600 mt-1 md:mt-2 mr-4'/>
    </button>
  )
}

export default TabButton