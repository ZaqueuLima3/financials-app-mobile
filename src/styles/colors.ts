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

  primary: '#2FB390',
  secondary: '#F09542',
  tertiary: '#65c7af',
  copper: '#C9C546',

  danger: '#D16B55',
  warning: '#FFCC33',
  success: '#7AC735',
  blue: '#004E98',

  greenLight: '#D9F2E4',
  redLight: '#FBE0DD',
  blueLight: '#DFEFFF',

  white: '#FFFFFF',
  black: '#000000',

  grey: '#686B72',
  darkGrey: '#53535A',
  mediumGrey: '#797E8B',
  lightGrey: '#F1F1F1',
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
