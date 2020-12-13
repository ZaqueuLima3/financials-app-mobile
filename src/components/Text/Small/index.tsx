import React, {ReactNode, FC} from 'react'
import {StyleProp, TextStyle, TextProps} from 'react-native'

import Text, {TextAlign} from '../Base'
import {ColorsPropType} from '../../../styles'

type PropsRegular = {
  children: ReactNode
  color?: ColorsPropType
  capitalize?: boolean
  style?: StyleProp<TextStyle>
  align?: TextAlign
} & TextProps

export const Small: FC<PropsRegular> = ({
  children,
  color,
  capitalize,
  align,
  ...props
}: PropsRegular) => {
  return (
    <Text
      size="small"
      color={color}
      align={align}
      weight="semibold"
      capitalize={capitalize}
      {...props}>
      {children}
    </Text>
  )
}
