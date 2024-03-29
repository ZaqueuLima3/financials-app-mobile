import React, {ReactNode, FC} from 'react'
import {StyleProp, TextStyle} from 'react-native'
import Text, {TextAlign} from '../Base'
import {ColorsPropType} from '../../../styles'

type PropsBigTitle = {
  children: ReactNode
  color?: ColorsPropType
  capitalize?: boolean
  align?: TextAlign
  style?: StyleProp<TextStyle>
}

export const BigTitle: FC<PropsBigTitle> = ({
  children,
  color,
  capitalize,
  align,
  ...props
}: PropsBigTitle) => {
  return (
    <Text
      size="bigTitle"
      color={color}
      weight="bold"
      capitalize={capitalize}
      align={align}
      {...props}>
      {children}
    </Text>
  )
}
