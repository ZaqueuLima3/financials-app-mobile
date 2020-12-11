import React, {useRef, useCallback} from 'react'
import {TouchableOpacity, TextInput} from 'react-native'
import {FormHandles} from '@unform/core'
import {useNavigation} from '@react-navigation/native'

import {useAuth} from '../../hooks/auth'
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
  ForgotPasswordButton,
  ButtonText,
  Footer,
} from './styles'

const SignIn: React.FC = () => {
  const navigation = useNavigation()
  const formRef = useRef<FormHandles>(null)
  const passwordInputRef = useRef<TextInput>(null)

  const {signIn} = useAuth()
  const {colors} = useColors()

  const handleSignIn = useCallback((data) => {
    signIn({email: data.email, password: data.password})
  }, [])

  return (
    <Container bg={colors.container}>
      <Logo source={logo} />

      <Title>Bem vindo de volta</Title>
      <Regular>Faça seu login</Regular>

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

        <ForgotPasswordButton onPress={() => {}}>
          <Regular align="right" color="primary" weight="semibold">
            Esqueci minha senha
          </Regular>
        </ForgotPasswordButton>

        <Button
          bg={colors.primary}
          onPress={() => formRef.current?.submitForm()}>
          <ButtonText color="white">Enriquecer</ButtonText>
        </Button>
      </Form>

      <Footer>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Regular>
            Não possuí uma conta?{' '}
            <Regular color="primary" weight="semibold">
              Crie uma nova
            </Regular>
          </Regular>
        </TouchableOpacity>
      </Footer>
    </Container>
  )
}

export default SignIn
