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
    <section className="m-auto flex h-full w-full max-w-[1440px] flex-col items-center justify-center py-1 max-md:px-2">
      {withHeader && <DashboardHeader />}

      <main className={`${withHeader && 'mt-4'} mt-2 w-full`}>
        <div className="w-full">{children}</div>
      </main>

      {withFooter && <DashboardFooter />}
    </section>
  )
}

export default DashboardLayout
