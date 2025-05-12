import Link from 'next/link'
import { IoPersonCircleSharp } from 'react-icons/io5'
import { ProfileComponentsProps } from './ProfileTypes'

const ProfileMobile = ({ isAuthenticated }: ProfileComponentsProps) => {
  return (
    <div className="flex items-center justify-center gap-1 rounded-full bg-blue-dark text-white transition-all duration-200 md:hidden">
      <div className="text-sm">
        {isAuthenticated ? (
          <Link href="/profile">
            <IoPersonCircleSharp className="rounded-full bg-white p-1 text-3xl text-blue-dark transition-all duration-300" />
          </Link>
        ) : (
          <div className="flex items-center justify-center gap-1 px-4 py-1 pb-2">
            <Link className="rounded-full text-sm transition-all duration-300 hover:bg-white hover:text-black" href="/login">
              ورود
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProfileMobile
