import Profile from '@/components/Shared/Profile/Profile'
import Menu from '../../Shared/Menu/Menu'

const DashboardHeader = () => {
  return (
    <div className="flex w-full items-end justify-between py-3 max-md:items-center">
      <Menu />
      <Profile />
    </div>
  )
}

export default DashboardHeader
