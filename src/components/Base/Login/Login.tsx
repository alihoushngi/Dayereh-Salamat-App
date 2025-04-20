'use client'
import { useAuth } from '@/hooks/checkToken'
import LoadingIndicator from '@/utilities/loadingIndicator'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const Login = () => {
  const { isAuthenticated, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/')
    }
  }, [isAuthenticated, router])

  if (loading) return <LoadingIndicator show={loading} />

  if (!isAuthenticated) {
    return <div>login</div>
  }
}

export default Login
