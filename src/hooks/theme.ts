import {useContext} from 'react'

import {ThemeContext, ThemeContextData} from '../context/theme'

export function useColors(): ThemeContextData {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useColors must be used within a ThemeProvider')
  }

  return context
}
