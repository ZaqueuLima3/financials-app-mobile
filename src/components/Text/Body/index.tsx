import React, {ReactNode, FC} from 'react'
import {StyleProp, TextStyle} from 'react-native'

import Text, {TextAlign} from '../Base'
import {ColorsPropType} from '../../../styles'

type PropsBody = {
  children: ReactNode
  color?: ColorsPropType
  capitalize?: boolean
  style?: StyleProp<TextStyle>
  align?: TextAlign
}

export const Body: FC<PropsBody> = ({
  children,
  color,
  capitalize,
  style,
  align,
  ...props
}: PropsBody) => {
  return (
    <Text
      style={style}
      size="body"
      color={color}
      weight="bold"
      capitalize={capitalize}
      align={align}
      {...props}>
      {children}
    </Text>
  )
}
