import React from 'react'

import {ActivityIndicator, View} from 'react-native'
import {useAuth} from '../hooks/auth'
import {useTheme} from '../hooks/theme'

import AuthRoutes from './auth.routes'
import AppRoutes from './app.routes'

const Routes: React.FC = () => {
  const {colors} = useTheme()
  const {user, loading} = useAuth()

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color={colors.text} />
      </View>
    )
  }

  return user ? <AppRoutes /> : <AuthRoutes />
}

export default Routes
