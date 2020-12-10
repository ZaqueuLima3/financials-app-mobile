import React, {ReactNode, FC} from 'react'
import {StyleProp, TextStyle} from 'react-native'

import Text, {TextAlign} from '../Base'
import {ColorsPropType} from '../../../styles'

type PropsCaption = {
  children: ReactNode
  color?: ColorsPropType
  capitalize?: boolean
  style?: StyleProp<TextStyle>
  align?: TextAlign
}

export const Caption: FC<PropsCaption> = ({
  children,
  color,
  capitalize,
  style,
  align,
  ...props
}: PropsCaption) => {
  return (
    <Text
      style={style}
      size="caption"
      weight="ultrabold"
      color={color}
      capitalize={capitalize}
      align={align}
      {...props}>
      {children}
    </Text>
  )
}
