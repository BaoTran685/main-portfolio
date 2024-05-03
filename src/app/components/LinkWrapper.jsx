import Link from 'next/link'

const LinkWrapper = ({ webUrl, className, children }) => {
  return (
    <Link
      href={webUrl}
      rel='noopener noreferrer'
      target='_blank'
      className={className}
    >
      {children}
    </Link>
  )
}

export default LinkWrapper
