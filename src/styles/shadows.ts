import {Platform} from 'react-native'
import {colors} from './colors'

const shadowsIOS = async (value: number): Promise<any> => {
  const color = await colors()

  return {
    shadowColor: color.black,
    shadowRadius: 5,
    shadowOffset: {
      height: value,
      width: 0,
    },
    shadowOpacity: 0.2,
  }
}

const shadowsAndroid: Record<string, any> = [
  null,
  {
    elevation: 1,
  },
  {
    elevation: 2,
  },
  {
    elevation: 3,
  },
  {
    elevation: 4,
  },
  {
    elevation: 5,
  },
]

export const getShadow = (value: number): any =>
  Platform.OS === 'ios' ? shadowsIOS(value) : shadowsAndroid[value]
