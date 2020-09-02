import React, {createContext, useState} from 'react'

interface SignInCredentials {
  email: string
  password: string
}

export interface AuthContextData {
  logged: boolean
  signIn(credentials: SignInCredentials): void
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({children}) => {
  const [logged, setLogged] = useState(false)

  function signIn(credentials: SignInCredentials): void {
    if (credentials.email && credentials.password) {
      setLogged(true)
    }
  }

  return (
    <AuthContext.Provider value={{logged, signIn}}>
      {children}
    </AuthContext.Provider>
  )
}
