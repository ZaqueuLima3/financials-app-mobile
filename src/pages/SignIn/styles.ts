import styled from 'styled-components/native'
import {Form as UnForm} from '@unform/mobile'
import {HeadLine, Title as TitleComponent} from '../../components/Text'

interface ContainerProps {
  bg: string
}

interface ButtonProps {
  bg: string
}

export const Container = styled.SafeAreaView<ContainerProps>`
  flex: 1;
  align-items: center;
  background-color: ${(p) => p.bg};
`

export const Logo = styled.Image`
  margin-top: 100px;
`

export const Title = styled(HeadLine)`
  margin-top: 30px;
`

export const Form = styled(UnForm)`
  width: 100%;
  padding: 0 36px;
  align-items: center;
  margin-top: 50px;
`

export const Button = styled.TouchableOpacity<ButtonProps>`
  background-color: ${(props) => props.bg};
  width: 100%;
  height: 50px;
  border-radius: 4px;
  margin-top: 36px;
  margin-bottom: 9px;
  justify-content: center;
  align-items: center;
`
export const ForgotPasswordButton = styled.TouchableOpacity`
  width: 100%;
  border-radius: 4px;
  margin-top: 8px;
  margin-bottom: 8px;
  justify-content: center;
  align-items: flex-end;
`

export const ButtonText = styled(TitleComponent)`
  text-transform: uppercase;
`

export const Footer = styled.View`
  flex: 1;
  padding: 23px 0;
`
