import Link from 'next/link'

const NavLink = ({ name, href, active }) => {
  const activeNavLink = active ? 'text-[var(--orange-color)]' : 'text-[#45474B]'
  
  return (
    <Link
      href={href}
      className={`${activeNavLink} text--nav--header block`}
    >
      {name}
    </Link>
  )
}

export default NavLink;