import Link from 'next/link'
import { IoPersonCircleSharp } from 'react-icons/io5'
import { ProfileComponentsProps } from './ProfileTypes'

const ProfileDesktop = ({ isAuthenticated }: ProfileComponentsProps) => {
  return (
    <div className="flex items-center justify-center gap-2 rounded-full bg-blue-dark px-1 py-1 ps-4 text-white transition-all duration-200 max-md:hidden">
      <div className="text-sm">
        {isAuthenticated ? (
          <Link href="/profile">نام کاربری</Link>
        ) : (
          <div className="flex items-center justify-center gap-2">
            <Link className="rounded-full pb-1 text-sm transition-all duration-300 hover:bg-white hover:px-2 hover:py-[2px] hover:pb-1 hover:text-black" href="/login">
              ورود
            </Link>
          </div>
        )}
      </div>
      <IoPersonCircleSharp className="rounded-full bg-white text-3xl text-blue-dark transition-all duration-300" />
    </div>
  )
}

export default ProfileDesktop
