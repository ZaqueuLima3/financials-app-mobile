import React, {useRef, useCallback} from 'react'
import {TouchableOpacity, TextInput} from 'react-native'
import {FormHandles} from '@unform/core'
import {useNavigation} from '@react-navigation/native'

import {useAuth} from '../../hooks/auth'
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
  const passwordInputRef = useRef<TextInput>(null)

  const {signIn} = useAuth()

  const handleSignIn = useCallback((data) => {
    signIn({email: data.email, password: data.password})
  }, [])

  return (
    <Container>
      <Logo source={logo} />

      <Title>Faça seu login</Title>

      <Form ref={formRef} onSubmit={handleSignIn}>
        <Input
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
          <ButtonText>Enriquecer</ButtonText>
        </Button>

        <TouchableOpacity onPress={() => {}}>
          <SmallText>Esqueci minha senha</SmallText>
        </TouchableOpacity>
      </Form>

      <Footer>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <SmallText>Criar uma nova conta</SmallText>
        </TouchableOpacity>
      </Footer>
    </Container>
  )
}

export default SignIn
