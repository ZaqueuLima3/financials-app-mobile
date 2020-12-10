import 'react-native-gesture-handler'

import React, {useCallback, useEffect, useState} from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {
  Appearance,
  KeyboardAvoidingView,
  SafeAreaView,
  StatusBar,
  View,
} from 'react-native'

import AsyncStorage from '@react-native-community/async-storage'
import Routes from './routes'
import AppProvider from './context'
import {STORAGE} from './config/constants'
import {useColors} from './hooks/theme'

declare const global: {HermesInternal: null | {}}

const App: React.FC = () => {
  const [barStyle, setBarStyle] = useState<
    'light-content' | 'dark-content' | 'default' | undefined
  >(Appearance.getColorScheme() === 'dark' ? 'dark-content' : 'light-content')

  const {colors} = useColors()

  const themeDark = useCallback(async () => {
    const value = await AsyncStorage.getItem(STORAGE.THEME)

    if (value) {
      if (value === 'dark') {
        setBarStyle('light-content')
      } else {
        setBarStyle('dark-content')
      }
    }
  }, [])

  useEffect(() => {
    themeDark()
  })

  return (
    <>
      <StatusBar barStyle={barStyle} backgroundColor={colors.container} />

      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </>
  )
}

export default App
