'use client'
import { useMediaQuery } from 'react-responsive'
import MainDesktop from './MainDesktop'
import MainMobile from './MainMobile'

const Main = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 })

  if (isMobile) {
    return <MainMobile />
  }

  return <MainDesktop />
}

export default Main
