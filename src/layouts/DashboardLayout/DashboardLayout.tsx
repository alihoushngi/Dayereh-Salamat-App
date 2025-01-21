import DashboardFooter from '@/components/Home/Dashboard/DashboardFooter'
import DashboardHeader from '@/components/Home/Dashboard/DashboardHeader'
import { FC, ReactNode } from 'react'

interface IDashboardLayoutProps {
  withHeader?: boolean
  withFooter?: boolean
  children: ReactNode
}

const DashboardLayout: FC<IDashboardLayoutProps> = ({ children, withFooter, withHeader }) => {
  return (
    <section className="flex flex-col items-center h-full w-full py-1 px-8">
      {withHeader && <DashboardHeader />}

      <main className={`${withHeader && 'mt-4'} mt-2`}>
        <div>{children}</div>
      </main>

      {withFooter && <DashboardFooter />}
    </section>
  )
}

export default DashboardLayout
