'use client'

import { useAuth } from '@/hooks/checkToken'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import { desktopMenuList } from '../menuList'

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { isAuthenticated } = useAuth()
  const pathName = usePathname()

  const toggleMenu = () => setIsOpen((prev) => !prev)

  return (
    <div className="relative z-50">
      <button onClick={toggleMenu} className="p-2 text-blue-dark focus:outline-none" aria-label="Toggle menu">
        <HiOutlineMenuAlt3 size={24} />
      </button>

      <div className={`fixed inset-0 bg-black/30 transition-opacity duration-300 ${isOpen ? 'visible opacity-100' : 'invisible opacity-0'}`} onClick={toggleMenu}></div>

      <div
        className={`fixed right-0 top-0 z-50 flex h-full w-64 transform flex-col justify-between bg-white p-4 shadow-lg transition-transform duration-300 ease-in-out ${
          isOpen ? '-translate-x-0' : 'translate-x-full'
        }`}
      >
        <div>
          <div className="flex w-full justify-end">
            <IoIosCloseCircleOutline size={20} onClick={toggleMenu} className="cursor-pointer" />
          </div>
          <div className="mt-4 flex flex-col gap-4">
            {desktopMenuList.map((item) => (
              <div key={item.id} className="flex items-center">
                <div className="h-4 w-[2px] bg-blue-light"></div>
                <Link
                  href={item.slug}
                  className="pr-2 text-base font-thin text-base-90 transition-all duration-200"
                  style={pathName === item.slug ? { fontWeight: 'bold', color: '#004B62' } : undefined}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
        {!isAuthenticated && <button className="rounded-md bg-red-dark px-2 py-1 text-white transition-all duration-300 hover:bg-red-default">خروج از حساب کاربری</button>}
      </div>
    </div>
  )
}

export default MobileMenu
