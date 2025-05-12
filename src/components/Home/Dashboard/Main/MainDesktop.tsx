import DesktopMenu from '@/components/Shared/Menu/DesktopMenu/DesktopMenu'
import DoctorMainPhoto from '@/images/DoctorMainPhoto.png'
import Image from 'next/image'

const MainDesktop = () => {
  return (
    <div className="flex w-full items-stretch justify-between gap-3">
      <div className="flex items-center justify-center rounded-3xl bg-[#f2f2f2] px-4 py-3">
        <DesktopMenu />
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-4 rounded-3xl bg-blue-dark text-center text-white">
        <div className="flex items-center justify-center gap-4">
          <div className="flex flex-col items-center justify-center gap-2 tracking-tighter">
            <h1 className="text-8xl font-bold">دایره سلامت</h1>
            <h2 className="text-3xl font-medium">مرجع تخصصی سلامت و بیماری‌های پستان</h2>
            <div className="flex gap-1 text-justify">
              <span>در دایره سلامت شما می‌توانید سوالات خود را در حوزه‌ی</span>
              <strong>بیماری‌های پستان و سرطان پستان</strong>
              <span>از پزشکان فوق تخصص پستان بپرسید.</span>
            </div>
          </div>
          <Image src={DoctorMainPhoto} alt="doctor main page" width={1024} height={1024} priority className="w-1/4" />
        </div>
      </div>
    </div>
  )
}

export default MainDesktop
