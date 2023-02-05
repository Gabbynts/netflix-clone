
import {
  createUserWithEmailAndPassword,
  User,
} from 'firebase/auth'
import { useRouter } from 'next/router'
import { Children, useState } from 'react'

import { auth } from '../firebase'

interface AuthProviderProps{
  childre: React.ReactNode
}

export const AuthProvider = ({children}: AuthProviderProps) {
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState<User | null>(null)
  const router = useRouter()

  const signUp = async (email: string, password: string) => {
    setLoading(true)

    await createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
      setUser(userCredential.user)
      router.push('/')
      setLoading(false)
    }).catch((error) => alert(error.message)).finally(() => setLoading(false))
  }

  const signIn = async (email: string, password: string) => {
    setLoading(true)

    await createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
      setUser(userCredential.user)
      router.push('/')
      setLoading(false)
    }).catch((error) => alert(error.message)).finally(() => setLoading(false))
  }

  // logout

  return (
    <AuthContext.Provider>
      {children}
    </AuthContext.Provider>
  )
}
