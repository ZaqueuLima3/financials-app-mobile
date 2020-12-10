import AsyncStorage from '@react-native-community/async-storage'
import {Appearance, ColorSchemeName} from 'react-native'
import {STORAGE} from '../config/constants'
import {AvailableColors} from './themeType'

export const commonColors = {
  greyTransparent: 'rgba(255, 255, 255, 0.5)',
  greenTransparent: 'rgba(120, 197, 52, 0.6)',
  tertiaryTransparent: 'rgba(255, 0, 115, 0.6)',
  primary: '#ffc800',
  copper: '#b57c00',
  secondary: '#0028E2',
  tertiary: '#ff0073',
  danger: '#FF0000',
  warning: '#F4A540',
  green: '#7AC735',
  blue: '#4285F4',
  greenLight: '#D9F2E4',
  redLight: '#FBE0DD',
  blueLight: '#DFEFFF',
  transparent: 'transparent',
  white: '#FFF',
  blackTransparent: 'rgba(0, 0, 0, 0.5)',
  grey: '#b0b0b0',
  greyLight: '#F1F1F1',
  darkGrey: '#787878',
  black: '#000',
  contrastLight: '#8e8e8f',
  contrastMedium: '#888c95',
}

export const dark: AvailableColors = {
  mode: '#000',
  contrast: '#FFF',
  contrastDark: '#1c1c1d',
  contrastMode: '#1c1c1d',
  ...commonColors,
}

export const light: AvailableColors = {
  mode: '#FFF',
  contrast: '#000',
  contrastDark: '#FFF',
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
