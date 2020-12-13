import React, {useEffect, createContext, useState, useCallback} from 'react'
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
  const [theme, setTheme] = useState<AvailableColors>(light)

  const handleChangeTheme = (value: ColorSchemeName): void => {
    let scheme = ''
    if (value === 'dark') {
      setTheme(dark)
      scheme = 'dark'
    } else {
      setTheme(light)
      scheme = 'light'
    }

    AsyncStorage.setItem(STORAGE.THEME, scheme)
  }

  useEffect(() => {
    async function getTheme(): Promise<void> {
      const value = await AsyncStorage.getItem(STORAGE.THEME)

      if (value !== null && (value === 'light' || value === 'dark')) {
        handleChangeTheme(value)
      } else {
        const defaultTheme = Appearance.getColorScheme()
        handleChangeTheme(defaultTheme)
      }
    }

    getTheme()
  }, [])

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
