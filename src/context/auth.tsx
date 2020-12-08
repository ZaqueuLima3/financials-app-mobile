import React, {createContext, useState, useCallback, useEffect} from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import api from '../service/api'

interface User {
  id: string
  name: string
  email: string
  avatar_url: string
}

interface AuthState {
  token: string
  user: User
}

interface SignInCredentials {
  email: string
  password: string
}

export interface AuthContextData {
  signIn(credentials: SignInCredentials): void
  signOut(): void
  user: User
  loading: boolean
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({children}) => {
  const [data, setData] = useState<AuthState>({} as AuthState)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadData(): Promise<void> {
      const [token, user] = await AsyncStorage.multiGet([
        '@youplan:token',
        '@youplan:user',
      ])

      if (token[1] && user[1]) {
        api.defaults.headers.authorization = `Bearer ${token[1]}`
        setData({token: token[1], user: JSON.parse(user[1])})
      }
      setLoading(false)
    }

    loadData()
  }, [])

  const signIn = useCallback(async ({email, password}: SignInCredentials) => {
    const response = await api.post('sessions', {email, password})

    const {token, user} = response.data

    api.defaults.headers.authorization = `Bearer ${token}`

    await AsyncStorage.multiSet([
      ['@youplan:token', token],
      ['@youplan:user', JSON.stringify(user)],
    ])

    setData({token, user})
  }, [])

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove(['@youplan:token', '@youplan:user'])

    setData({} as AuthState)
  }, [])

  return (
    <AuthContext.Provider value={{user: data.user, signIn, signOut, loading}}>
      {children}
    </AuthContext.Provider>
  )
}
