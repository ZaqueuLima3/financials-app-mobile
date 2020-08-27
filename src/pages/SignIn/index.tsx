import React from 'react'
import {StatusBar} from 'react-native'

import logo from '../../assets/logo.png'

import {
  Container,
  Logo,
  Title,
  Form,
  TextInput,
  Button,
  ButtonText,
  SmallText,
  Footer,
} from './styles'

const SignIn: React.FC = () => {
  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <Logo source={logo} />

      <Title>Faça seu login</Title>

      <Form>
        <TextInput placeholder="Digite seu e-mail" />
        <TextInput placeholder="Sua senha secreta" />

        <Button onPress={() => {}}>
          <ButtonText>Enriquecer</ButtonText>
        </Button>

        <SmallText>Esqueci minha senha</SmallText>
      </Form>

      <Footer>
        <SmallText>Criar uma nova conta</SmallText>
      </Footer>
    </Container>
  )
}

export default SignIn
