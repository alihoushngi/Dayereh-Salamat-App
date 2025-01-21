'use client'
import { useAuth } from '@/hooks/checkToken'
import Link from 'next/link'
import { GrRestroomWomen } from 'react-icons/gr'

const Profile = () => {
  const { isAuthenticated } = useAuth()

  return (
    <div className="w-fit relative">
      <div className="flex justify-center items-center gap-1 py-1 px-1 ps-2 rounded-full transition-all duration-200 bg-red-dark hover:bg-blue-light text-white hover:text-base-90">
        <div className="text-sm bg-transparent">
          {isAuthenticated ? (
            <Link href="/profile">نام کاربری</Link>
          ) : (
            <div className="bg-transparent flex justify-center items-center gap-2">
              <Link className="text-sm bg-transparent hover:py-[2px] hover:px-2 transition-all duration-300 rounded-full hover:bg-white" href="/login">
                ورود
              </Link>
              <div className="h-[10px] w-[1px] bg-white"></div>
              <Link className="text-sm bg-transparent hover:py-[2px] hover:px-2 transition-all duration-300 rounded-full hover:bg-white" href="/register">
                ثبت نام
              </Link>
            </div>
          )}
        </div>
        <GrRestroomWomen className="text-3xl bg-white rounded-full text-blue-dark transition-all duration-300 hover:text-blue-default cursor-pointer" />
      </div>
      <div className="absolute top-12 left-0">hello</div>
    </div>
  )
}

export default Profile
