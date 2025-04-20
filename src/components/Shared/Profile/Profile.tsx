'use client'
import { useAuth } from '@/hooks/checkToken'
import ProfileDesktop from './ProfileDesktop'
import ProfileMobile from './ProfileMobile'

const Profile = () => {
  const { isAuthenticated } = useAuth()

  return (
    <div className="relative w-fit">
      <ProfileDesktop isAuthenticated={isAuthenticated} />
      <ProfileMobile isAuthenticated={isAuthenticated} />
    </div>
  )
}

export default Profile
