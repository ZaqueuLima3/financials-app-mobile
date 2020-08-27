import {useContext} from 'react'

import {AuthContext, AuthContextData} from '../context/auth'

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider')
  }

  return context
}
