import styled, {css} from 'styled-components/native'
import FeatherIcon from 'react-native-vector-icons/Feather'
import {AvailableColors} from '../../styles/themeType'

interface ContainerProps {
  isFocused: boolean
  hasError: boolean
  colors: AvailableColors
}

interface TextInputProps {
  color: string
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  border-radius: 4px;
  margin-bottom: 10px;
  border-width: 0.5px;
  border-color: ${(p) => p.colors.text};
  flex-direction: row;
  align-items: center;
  ${(props) =>
    props.hasError &&
    css`
      border-color: ${props.colors.danger};
    `}
  ${(props) =>
    props.isFocused &&
    css`
      border-color: ${props.colors.tertiary};
    `}
`

export const TextInput = styled.TextInput<TextInputProps>`
  flex: 1;
  color: ${(p) => p.color};
  font-size: 16px;
  font-family: 'Montserrat-Regular';
`

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`
