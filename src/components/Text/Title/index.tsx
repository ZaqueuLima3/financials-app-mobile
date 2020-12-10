import React, {ReactNode, FC} from 'react'
import {TextStyle, StyleProp} from 'react-native'

import Text, {TextAlign} from '../Base'
import {ColorsPropType} from '../../../styles'

type PropsTitle = {
  children: ReactNode
  color?: ColorsPropType
  capitalize?: boolean
  style?: StyleProp<TextStyle>
  align?: TextAlign
}

export const Title: FC<PropsTitle> = ({
  children,
  color,
  capitalize,
  style,
  align,
  ...props
}: PropsTitle) => {
  return (
    <Text
      size="title"
      color={color}
      weight="bold"
      capitalize={capitalize}
      style={style}
      align={align}
      {...props}>
      {children}
    </Text>
  )
}
