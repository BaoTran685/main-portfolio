

const HeroButton =  ({content}) => {
  return (
    <button className='w-full md:w-fit rounded-full button--background--dark text-white hover--scale--transition--button mr-4 mt-4'>
      <span className='block rounded-full px-6 py-3'>{content}</span>
    </button>
  )
}

export default HeroButton
