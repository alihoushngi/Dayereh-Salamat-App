import Cookies from 'js-cookie'

import { useEffect, useState } from 'react'

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = Cookies.get('userToken')
    setIsAuthenticated(!!token)
    setLoading(false)
  }, [])

  return { isAuthenticated, loading }
}

export const checkToken = (): string | null => {
  if (typeof window !== 'undefined' && window.localStorage.getItem('userToken')) {
    return 'Bearer ' + window.localStorage.getItem('userToken')
  }
  return null
}
