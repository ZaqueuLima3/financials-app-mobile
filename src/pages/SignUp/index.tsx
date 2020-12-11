import React, {useRef, useCallback} from 'react'
import {TouchableOpacity, TextInput} from 'react-native'
import {FormHandles} from '@unform/core'

import {useNavigation} from '@react-navigation/native'
import {useColors} from '../../hooks/theme'

import logo from '../../assets/logo.png'
import Input from '../../components/Input'
import {Regular} from '../../components/Text'

import {
  Container,
  Logo,
  Title,
  Form,
  Button,
  ButtonText,
  SmallText,
  Footer,
} from './styles'

const SignIn: React.FC = () => {
  const navigation = useNavigation()
  const formRef = useRef<FormHandles>(null)
  const emailInputRef = useRef<TextInput>(null)
  const passwordInputRef = useRef<TextInput>(null)

  const {colors} = useColors()

  const handleSignIn = useCallback((data) => {
    console.log(data)
  }, [])

  return (
    <Container bg={colors.container}>
      <Logo source={logo} />

      <Title>Bem Vindo</Title>
      <Regular>Crie sua conta gratis</Regular>

      <Form ref={formRef} onSubmit={handleSignIn}>
        <Input
          autoCapitalize="words"
          name="name"
          icon="user"
          placeholder="Como deseja ser chamado"
          returnKeyType="next"
          onSubmitEditing={() => {
            emailInputRef.current?.focus()
          }}
        />

        <Input
          ref={emailInputRef}
          autoCorrect={false}
          autoCapitalize="none"
          keyboardType="email-address"
          name="email"
          icon="mail"
          placeholder="Seu melhor e-mail"
          returnKeyType="next"
          onSubmitEditing={() => {
            passwordInputRef.current?.focus()
          }}
        />

        <Input
          ref={passwordInputRef}
          secureTextEntry
          name="password"
          icon="lock"
          placeholder="Sua senha secreta"
          returnKeyType="send"
          onSubmitEditing={() => formRef.current?.submitForm()}
        />

        <Button
          bg={colors.primary}
          onPress={() => formRef.current?.submitForm()}>
          <ButtonText>Enriquecer agora</ButtonText>
        </Button>
      </Form>

      <Footer>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <Regular>
            Já possuí uma conta?{' '}
            <Regular color="primary" weight="semibold">
              Login
            </Regular>
          </Regular>
        </TouchableOpacity>
      </Footer>
    </Container>
  )
}

export default SignIn
