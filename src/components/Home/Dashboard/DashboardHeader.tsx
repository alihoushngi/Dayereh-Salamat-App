import Profile from '@/components/Shared/Profile/Profile'
import Menu from '../../Shared/Menu/Menu'

const DashboardHeader = () => {
  return (
    <div className="m-2 flex w-full items-center justify-between rounded-3xl bg-[#f2f2f2] px-4 py-3 max-md:items-center">
      <Menu />
      <Profile />
    </div>
  )
}

export default DashboardHeader
