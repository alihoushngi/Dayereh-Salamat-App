import DSLogo from '@/images/DSLogo-2.svg'
import Image from 'next/image'
import Link from 'next/link'
import DesktopMenu from './DesktopMenu/DesktopMenu'
import MobileMenu from './MobileMenu/MobileMenu'

const Menu = () => {
  return (
    <>
      <div className="max-md:hidden flex justify-center items-end gap-8">
        <Link href={'/'}>
          <Image src={DSLogo} alt="Logo Dayereh-salamat" width={720} height={720} className="w-12 h-12" />
        </Link>
        <DesktopMenu />
      </div>
      <div className="md:hidden flex justify-center items-end gap-8">
        <MobileMenu />
        <Link href={'/'}>
          <Image src={DSLogo} alt="Logo Dayereh-salamat" width={720} height={720} className="w-12 h-12" />
        </Link>
      </div>
    </>
  )
}

export default Menu
