import styled from 'styled-components/native'
import {Form as UnForm} from '@unform/mobile'

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`

export const Logo = styled.Image`
  margin-top: 100px;
`

export const Title = styled.Text`
  font-size: 20px;
  font-family: 'Montserrat-Bold';
  color: #47455a;
  margin-top: 50px;
  margin-bottom: 24px;
`

export const Form = styled(UnForm)`
  width: 100%;
  padding: 0 36px;
  align-items: center;
`

export const Button = styled.TouchableOpacity`
  background-color: #3a2875;
  width: 100%;
  height: 50px;
  border-radius: 4px;
  margin-top: 12px;
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
