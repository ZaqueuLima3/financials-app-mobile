import React, {createContext, useState} from 'react'

interface SignInCredentials {
  email: string
  password: string
}

export interface AuthContextData {
  logged: boolean
  signIn(credentials: SignInCredentials): void
  signOut(): void
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({children}) => {
  const [logged, setLogged] = useState(true)

  function signIn(credentials: SignInCredentials): void {
    if (credentials.email && credentials.password) {
      setLogged(true)
    }
  }

  function signOut(): void {
    setLogged(false)
  }

  return (
    <AuthContext.Provider value={{logged, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  )
}
