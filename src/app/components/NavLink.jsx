import Link from 'next/link'

const NavLink = ({ name, href }) => {
  return (
    <Link
      href={href}
      className='block py-2 px-4 md:p-0 text-[#ADB7BE] text-base sm:text-lg hover:text-white md:text-xl '
    >
      {name}
    </Link>
  )
}

export default NavLink;