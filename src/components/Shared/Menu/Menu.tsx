import DSLogo from '@/images/DSLogo-2.svg'
import Image from 'next/image'
import Link from 'next/link'
import DesktopMenu from './DesktopMenu/DesktopMenu'
import MobileMenu from './MobileMenu/MobileMenu'

const Menu = () => {
  return (
    <>
      <div className="flex items-end justify-center gap-8 max-md:hidden">
        <Link href={'/'}>
          <Image src={DSLogo} alt="Logo Dayereh-salamat" width={720} height={720} className="h-12 w-12" />
        </Link>
        <DesktopMenu />
      </div>
      <div className="flex items-end justify-center gap-1 md:hidden">
        <MobileMenu />
        <Link href={'/'}>
          <Image src={DSLogo} alt="Logo Dayereh-salamat" width={720} height={720} className="h-12 w-12" />
        </Link>
      </div>
    </>
  )
}

export default Menu
