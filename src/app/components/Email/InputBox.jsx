

const InputBox = ({ label, name, type, placeholder }) => {
  return (
    <div className='mb-6'>
      <label
        htmlFor={name}
        type={type}
        className='text-black block mb-2 text-sm font-medium'
      >
        {label}
      </label>
      <input
        name={name}
        id={name}
        type={type}
        className='text-sm text-black rounded-lg block w-full bg-[#F5F7F8] border border-transparent focus:outline-none focus:ring-2 focus:ring-[#33353F] placeholder-[#9CA2A9] p-2.5 appearance-none'
        required
        placeholder={placeholder}
      />
    </div>
  )
}

export default InputBox
