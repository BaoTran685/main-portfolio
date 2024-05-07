import Link from 'next/link'

const NavLink = ({ name, href, active }) => {
  const activeNavLink = active ? 'text-[var(--light-orange-color)] duration-300' : 'text-[#45474B]'
  
  return (
    <Link
      href={href}
      className={`text--nav--header block ${activeNavLink}`}
    >
      {name}
    </Link>
  )
}

export default NavLink;