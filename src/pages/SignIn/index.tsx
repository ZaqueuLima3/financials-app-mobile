import React, {useRef, useCallback} from 'react'
import {TouchableOpacity, TextInput, Alert} from 'react-native'
import {FormHandles} from '@unform/core'
import {useNavigation} from '@react-navigation/native'
import * as Yup from 'yup'

import {useAuth} from '../../hooks/auth'
import {useColors} from '../../hooks/theme'
import logo from '../../assets/logo.png'
import Input from '../../components/Input'
import {Regular} from '../../components/Text'
import getValidationErrors from '../../utils/getValidationErrors'

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

interface SignInFormData {
  email: string
  password: string
}

const SignIn: React.FC = () => {
  const navigation = useNavigation()
  const formRef = useRef<FormHandles>(null)
  const passwordInputRef = useRef<TextInput>(null)

  const {signIn} = useAuth()
  const {colors} = useColors()

  const handleSignIn = useCallback(
    async (data: SignInFormData) => {
      try {
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Insira um e-mail valido'),
          password: Yup.string().required('Senha obrigatória'),
        })

        await schema.validate(data, {
          abortEarly: false,
        })

        await signIn({email: data.email, password: data.password})
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err)

          formRef.current?.setErrors(errors)

          return
        }

        Alert.alert(
          'Erro na autenticação',
          'Ocorreu um erro ao fazer login, cheque as credenciais',
        )
      }
    },
    [signIn],
  )

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
