import React from 'react'

import {ActivityIndicator, StatusBar, View} from 'react-native'
import {useAuth} from '../hooks/auth'
import {useColors} from '../hooks/theme'

import AuthRoutes from './auth.routes'
import AppRoutes from './app.routes'

const Routes: React.FC = () => {
  const {colors} = useColors()
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
