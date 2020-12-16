import 'react-native-gesture-handler'

import React, {useCallback, useEffect, useState} from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {Appearance, StatusBar} from 'react-native'

import Routes from './routes'
import {useTheme} from './hooks/theme'

declare const global: {HermesInternal: null | {}}

const App: React.FC = () => {
  const [barStyle, setBarStyle] = useState<
    'light-content' | 'dark-content' | 'default' | undefined
  >(Appearance.getColorScheme() === 'dark' ? 'dark-content' : 'light-content')

  const {colors, scheme} = useTheme()

  const themeDark = useCallback(async () => {
    if (scheme === 'dark') {
      setBarStyle('light-content')
    } else {
      setBarStyle('dark-content')
    }
  }, [scheme])

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
