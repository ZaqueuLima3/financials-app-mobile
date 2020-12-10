import React, {ReactNode, FC} from 'react'
import {StyleProp, TextStyle} from 'react-native'

import Text, {TextAlign} from '../Base'
import {ColorsPropType} from '../../../styles'

type PropsSubtitle = {
  children: ReactNode
  color?: ColorsPropType
  capitalize?: boolean
  style?: StyleProp<TextStyle>
  align?: TextAlign
}

export const Subtitle: FC<PropsSubtitle> = ({
  children,
  color,
  capitalize,
  style,
  align,
  ...props
}: PropsSubtitle) => {
  return (
    <Text
      style={style}
      size="subtitle"
      color={color}
      weight="semibold"
      capitalize={capitalize}
      align={align}
      {...props}>
      {children}
    </Text>
  )
}
