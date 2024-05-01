import Link from 'next/link'

const NavLink = ({ name, href }) => {
  return (
    <Link
      href={href}
      className='text--nav--header block'
    >
      {name}
    </Link>
  )
}

export default NavLink;