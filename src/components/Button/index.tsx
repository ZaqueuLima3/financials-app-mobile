import React from 'react'
import {RectButtonProperties} from 'react-native-gesture-handler'

import {useColors} from '../../hooks/theme'
import {Regular} from '../Text'

import {Container} from './styles'

interface ButtonProps extends RectButtonProperties {
  children: string
  containerStyle?: {}
}

const Button: React.FC<ButtonProps> = ({
  children,
  containerStyle = {},
  ...rest
}) => {
  const {colors} = useColors()
  return (
    <Container bg={colors.primary} style={containerStyle} {...rest}>
      <Regular color="white" weight="bold">
        {children}
      </Regular>
    </Container>
  )
}

export default Button
