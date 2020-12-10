import AsyncStorage from '@react-native-community/async-storage'
import {Appearance, ColorSchemeName} from 'react-native'
import {STORAGE} from '../config/constants'
import {AvailableColors} from './themeType'

export const commonColors = {
  greyTransparent: 'rgba(255, 255, 255, 0.5)',
  greenTransparent: 'rgba(120, 197, 52, 0.6)',
  tertiaryTransparent: 'rgba(255, 0, 115, 0.6)',
  blackTransparent: 'rgba(0, 0, 0, 0.14)',
  transparent: 'transparent',

  primary: '#3a2875',
  secondary: '#f4a63d',
  tertiary: '#5A40AF',
  copper: '#b57c00',

  danger: '#FF0000',
  warning: '#F4A540',
  green: '#7AC735',
  blue: '#0c5ac1',

  greenLight: '#D9F2E4',
  redLight: '#FBE0DD',
  blueLight: '#DFEFFF',
  greyLight: '#F1F1F1',

  white: '#FFFFFF',
  black: '#000000',

  grey: '#737175',
  darkGrey: '#787878',
  contrastMedium: '#888c95',
  contrastLight: '#8e8e8f',
}

export const dark: AvailableColors = {
  container: '#2B2C33',
  background: '#1a1a1a',
  text: '#FFFFFF',
  contrastDark: '#2F2F33',
  contrastMode: '#1c1c1d',
  ...commonColors,
}

export const light: AvailableColors = {
  container: '#FFFFFF',
  background: '#f0f2f5',
  text: '#48576b',
  contrastDark: '#f8f8f8',
  contrastMode: '#F2F5F5',
  ...commonColors,
}

export const colors = async (): Promise<AvailableColors> => {
  const defaultScheme = (await AsyncStorage.getItem(
    STORAGE.THEME,
  )) as ColorSchemeName

  const value = defaultScheme || Appearance.getColorScheme()
  const scheme = value === 'dark' ? dark : light

  return scheme
}
