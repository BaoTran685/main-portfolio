

const HeroButton =  ({content}) => {
  return (
    <button className='w-full md:w-fit rounded-full bg-[var(--orange-color)] hover--scale--transition--button mr-4 mt-2'>
      <span className='text-white block rounded-full px-6 py-3'>{content}</span>
    </button>
  )
}

export default HeroButton
