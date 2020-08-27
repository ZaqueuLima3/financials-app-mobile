import styled, {css} from 'styled-components/native'
import FeatherIcon from 'react-native-vector-icons/Feather'

interface ContainerProps {
  isFocused: boolean
  hasError: boolean
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  border-radius: 4px;
  margin-bottom: 10px;
  border-width: 0.5px;
  border-color: #201027;
  flex-direction: row;
  align-items: center;
  ${(props) =>
    props.hasError &&
    css`
      border-color: #c53030;
    `}
  ${(props) =>
    props.isFocused &&
    css`
      border-color: #3a2875;
    `}
`

export const TextInput = styled.TextInput`
  flex: 1;
  color: #47455a;
  font-size: 16px;
  font-family: 'Montserrat-Regular';
`

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`
