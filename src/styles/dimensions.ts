import {Dimensions} from 'react-native'

export const dimensions = {
  xtiny: 4,
  tiny: 8,
  small: 16,
  base: 24,
  medium: 32,
  large: 48,
  xlarge: 64,
}

export const SCREEN_WIDTH = Dimensions.get('screen').width
export const SCREEN_HEIGHT = Dimensions.get('window').height
