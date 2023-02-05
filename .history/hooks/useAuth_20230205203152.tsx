
import { useRouter } from 'next/router'
import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { auth } from '../firebase'

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
} from 'firebase/auth'


function useAuth() {
  const [loading, setLoading] useState(false)
  const signUp = async (email: string, password: string) => {

  }

  return (
    <div>useAuth</div>
  )
}

export default useAuth