import React, {useRef, useCallback} from 'react'
import {StatusBar, TouchableOpacity, TextInput} from 'react-native'
import {FormHandles} from '@unform/core'

import {useNavigation} from '@react-navigation/native'

import logo from '../../assets/logo.png'
import Input from '../../components/Input'

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

  const handleSignIn = useCallback((data) => {
    console.log(data)
  }, [])

  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <Logo source={logo} />

      <Title>Crie sua conta</Title>

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

        <Button onPress={() => formRef.current?.submitForm()}>
          <ButtonText>Enriquecer agora</ButtonText>
        </Button>
      </Form>

      <Footer>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <SmallText>Voltar para login</SmallText>
        </TouchableOpacity>
      </Footer>
    </Container>
  )
}

export default SignIn
