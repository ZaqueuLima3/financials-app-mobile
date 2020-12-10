import React, {ReactNode, FC} from 'react'
import {
  Text as RNText,
  TextStyle,
  StyleProp,
  Platform,
  PixelRatio,
} from 'react-native'
import {capitalize as textCapitalize} from '../../../utils'

import {useColors} from '../../../hooks/theme'

import {
  ColorsPropType,
  FontSizePropType,
  FontWeightPropType,
  fontSize,
} from '../../../styles'

export type TextAlign = 'center' | 'auto' | 'left' | 'right' | 'justify'

type Props = {
  children: ReactNode
  color?: ColorsPropType
  size?: FontSizePropType
  style?: StyleProp<TextStyle>
  weight?: FontWeightPropType
  capitalize?: boolean
  align?: TextAlign
}

const Text: FC<Props> = ({
  children,
  color = 'text',
  size = 'regular',
  style,
  weight = 'normal',
  capitalize,
  align = 'auto',
  ...props
}: Props) => {
  const text = capitalize ? textCapitalize(children) : children
  const {colors} = useColors()
  const getFontFamily = (bold: FontWeightPropType): string => {
    switch (bold) {
      case 'light':
        return 'Montserrat-Light'
      case 'semibold':
        return 'Montserrat-Medium'
      case 'bold':
        return 'Montserrat-Bold'
      case 'ultrabold':
        return 'Montserrat-ExtraBold'
      default:
        return 'Montserrat-Regular'
    }
  }
  const styleDefault: StyleProp<TextStyle> = {
    fontSize:
      Platform.OS === 'ios'
        ? fontSize[size]
        : fontSize[size] * PixelRatio.getFontScale(),
    color: colors[color],
    fontFamily: getFontFamily(weight),
    textAlign: align,
  }
  return (
    <RNText
      {...props}
      style={[style, styleDefault]}
      maxFontSizeMultiplier={fontSize.headLine}>
      {text}
    </RNText>
  )
}

export default React.memo(Text)
