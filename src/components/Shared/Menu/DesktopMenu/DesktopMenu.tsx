'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { desktopMenuList } from '../menuList'

const DesktopMenu = () => {
  const pathName = usePathname()

  return (
    <div className="flex w-fit flex-col items-center justify-center gap-2 text-nowrap">
      {desktopMenuList.map((item) => (
        <Link
          className="w-full text-nowrap rounded-2xl bg-[#ffffff] px-4 py-3 text-center text-base font-thin text-base-90 transition-all duration-200 hover:bg-blue-extraLight hover:text-blue-dark"
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
