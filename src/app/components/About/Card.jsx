import React from 'react'


const Card = (aboutHeight, aboutWidth) => {
  const dimensionCard = {
    height: `${(aboutHeight * 1) / 2}px`,
    width: `${(aboutWidth * 2) / 3}px`
  }
  console.log(dimensionCard)
  return <>
    {aboutHeight ? (
      <div className='flex flex-col items-center justify-center w-fit h-fit bg-[#E94057] rounded-3xl p-10'>
        <div
          style={dimensionCard}
          className={`flex flex-col relative text-white bg-[#e7e7e76b] shadow-xl rounded-3xl`}
        >
          <div className='text-2xl top-4 left-6 absolute'>platinum</div>
          <div className='text-3xl block w-full text-center absolute top-24'>
            1100 1000 0001 0000
          </div>
          <div className='absolute bottom-4 left-6'>
            <div className='text-sm ml-2 mb-1'>valid-thru</div>
            <div className='text-md ml-2 mb-1'>08/28</div>
            <div className='text--content'>Quoc Bao Tran</div>
          </div>
        </div>
      </div>
    ) : null}
  </>
}

export default Card