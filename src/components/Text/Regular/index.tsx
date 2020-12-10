import React, {ReactNode, FC} from 'react'
import {StyleProp, TextStyle} from 'react-native'

import Text, {TextAlign} from '../Base'
import {ColorsPropType, FontWeightPropType} from '../../../styles'

type PropsRegular = {
  children: ReactNode
  color?: ColorsPropType
  weight?: Exclude<FontWeightPropType, 'light' | 'bold' | 'ultrabold'>
  capitalize?: boolean
  style?: StyleProp<TextStyle>
  align?: TextAlign
}

export const Regular: FC<PropsRegular> = ({
  children,
  color,
  weight = 'normal',
  capitalize,
  style,
  align,
  ...props
}: PropsRegular) => {
  return (
    <Text
      style={style}
      size="regular"
      color={color}
      weight={weight}
      capitalize={capitalize}
      align={align}
      {...props}>
      {children}
    </Text>
  )
}
