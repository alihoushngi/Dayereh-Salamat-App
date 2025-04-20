import Main from '@/components/Home/Dashboard/Main/Main'
import DashboardLayout from '@/layouts/DashboardLayout/DashboardLayout'

export default function Home() {
  return (
    <DashboardLayout withHeader withFooter>
      <Main />
    </DashboardLayout>
  )
}
