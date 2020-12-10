import React, {useEffect, createContext, useState} from 'react'
import {ColorSchemeName, Appearance} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

import {AvailableColors, light, dark} from '../styles'
import {STORAGE} from '../config/constants'

export interface ThemeContextData {
  colors: AvailableColors
  setTheme(theme: ColorSchemeName): void
}

export const ThemeContext = createContext<ThemeContextData>(
  {} as ThemeContextData,
)

export const ThemeProvider: React.FC = ({children}) => {
  const [theme, setTheme] = useState<AvailableColors>(
    Appearance.getColorScheme() === 'light' ? light : dark,
  )

  const handleChangeTheme = (value: ColorSchemeName): void => {
    let scheme = ''
    if (value === 'light') {
      setTheme(light)
      scheme = 'light'
    } else {
      setTheme(dark)
      scheme = 'dark'
    }

    AsyncStorage.setItem(STORAGE.THEME, scheme)
  }

  const getPreferenceUser = async (): Promise<void> => {
    const value = (await AsyncStorage.getItem(STORAGE.THEME)) as ColorSchemeName

    if (value) {
      handleChangeTheme(value)
    }
  }

  useEffect(() => {
    getPreferenceUser()
  })

  useEffect(() => {
    const event = Appearance.addChangeListener(async ({colorScheme}) => {
      const value = (await AsyncStorage.getItem(
        STORAGE.THEME,
      )) as ColorSchemeName

      if (!value) {
        handleChangeTheme(colorScheme)
      }
    })
    return () => {
      if (event) event.remove()
    }
  }, [])

  return (
    <ThemeContext.Provider value={{colors: theme, setTheme: handleChangeTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}
