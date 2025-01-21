'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { desktopMenuList } from '../menuList'

const DesktopMenu = () => {
  const pathName = usePathname()

  return (
    <div className="flex items-center gap-4">
      {desktopMenuList.map((item) => (
        <Link
          className="font-light text-base-60 text-base transition-all duration-200 hover:text-blue-dark"
          style={pathName === item.slug ? { fontWeight: 'bold', color: '#004B62' } : undefined}
          key={item.id}
          href={item.slug}
        >
          {item.name}
        </Link>
      ))}
    </div>
  )
}

export default DesktopMenu
