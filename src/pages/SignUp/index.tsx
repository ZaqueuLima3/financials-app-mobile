import React, {useRef, useCallback} from 'react'
import {TouchableOpacity, TextInput, Alert} from 'react-native'
import {FormHandles} from '@unform/core'

import {useNavigation} from '@react-navigation/native'
import * as Yup from 'yup'

import api from '../../service/api'
import {useTheme} from '../../hooks/theme'
import Input from '../../components/Input'
import {Regular} from '../../components/Text'
import getValidationErrors from '../../utils/getValidationErrors'

import logo from '../../assets/logo.png'

import {
  Container,
  Logo,
  Title,
  Form,
  Button,
  ButtonText,
  Footer,
} from './styles'

interface SignupFormData {
  name: string
  email: string
  password: string
}

const SignIn: React.FC = () => {
  const navigation = useNavigation()
  const formRef = useRef<FormHandles>(null)
  const emailInputRef = useRef<TextInput>(null)
  const passwordInputRef = useRef<TextInput>(null)

  const {colors} = useTheme()

  const handleSignUp = useCallback(
    async (data: SignupFormData) => {
      try {
        formRef.current?.setErrors({})

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Insira um e-mail válido'),
          password: Yup.string().min(6, 'Mínimo 6 dígitos'),
        })

        await schema.validate(data, {
          abortEarly: false,
        })

        await api.post('/users', data)

        Alert.alert(
          'Cadastro realizado com sucesso!',
          'Você já pode fazer login na aplicação',
        )

        navigation.goBack()
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err)

          formRef.current?.setErrors(errors)

          return
        }

        Alert.alert(
          'Erro no cadastro',
          'Ocorreu um erro ao fazer cadastro, tente novamente',
        )
      }
    },
    [navigation],
  )

  return (
    <Container bg={colors.container}>
      <Logo source={logo} />

      <Title>Bem Vindo</Title>
      <Regular>Crie sua conta gratis</Regular>

      <Form ref={formRef} onSubmit={handleSignUp}>
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
