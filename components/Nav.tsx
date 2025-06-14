'use client'
import { links } from '@/constants/navLinks'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Nav = () => {
  const pathname: string = usePathname()
  return (
    <nav className='flex gap-8'>
      {links.map((link, index) => {
        return (
          <Link
            key={index}
            href={link.path}
            className={`${
              link.path === pathname &&
              'text-accent-default border-b-2 border-accent-default'
            } capitalize font-medium hover:text-accent-hover transition-all`}
          >
            {' '}
            {link.name}
          </Link>
        )
      })}
    </nav>
  )
}

export default Nav
