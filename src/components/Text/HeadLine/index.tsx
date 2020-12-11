import React, {ReactNode, FC} from 'react'

import Text, {TextAlign} from '../Base'
import {ColorsPropType} from '../../../styles'

type PropsHeadLine = {
  children: ReactNode
  color?: ColorsPropType
  capitalize?: boolean
  align?: TextAlign
}

export const HeadLine: FC<PropsHeadLine> = ({
  children,
  color,
  capitalize,
  align,
  ...props
}: PropsHeadLine) => {
  return (
    <Text
      size="headLine"
      color={color}
      weight="bold"
      capitalize={capitalize}
      align={align}
      {...props}>
      {children}
    </Text>
  )
}
