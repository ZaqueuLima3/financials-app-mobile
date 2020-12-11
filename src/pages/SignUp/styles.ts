import styled from 'styled-components/native'
import {Form as UnForm} from '@unform/mobile'
import {HeadLine} from '../../components/Text'

interface ContainerProps {
  bg: string
}

interface ButtonProps {
  bg: string
}

export const Container = styled.SafeAreaView<ContainerProps>`
  flex: 1;
  align-items: center;
  background-color: ${(props) => props.bg};
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
  margin-top: 24px;
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

export const ButtonText = styled.Text`
  text-transform: uppercase;
  color: #ffffff;
  font-size: 16px;
  font-family: 'Montserrat-Bold';
`

export const SmallText = styled.Text`
  color: #1b1238;
  font-size: 16px;
  font-family: 'Montserrat-Regular';
`

export const Footer = styled.View`
  flex: 1;
  flex-direction: column-reverse;
  padding: 23px 0;
`
