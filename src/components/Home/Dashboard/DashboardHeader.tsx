import Profile from '@/components/Shared/Profile/Profile'
import Menu from '../../Shared/Menu/Menu'

const DashboardHeader = () => {
  return (
    <div className="w-full flex justify-between items-end py-3">
      <Menu />
      <Profile />
    </div>
  )
}

export default DashboardHeader
