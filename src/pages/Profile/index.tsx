import React, {useCallback, useMemo, useRef} from 'react'
import {
  View,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  TextInput,
  Alert,
  PermissionsAndroid,
} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {Form} from '@unform/mobile'
import {FormHandles} from '@unform/core'
import * as Yup from 'yup'
import Icon from 'react-native-vector-icons/Feather'
import ImagePicker, {ImageLibraryOptions} from 'react-native-image-picker'

import api from '../../service/api'

import Input from '../../components/Input'
import Button from '../../components/Button'

import getValidationErrors from '../../utils/getValidationErrors'
import {useAuth} from '../../hooks/auth'
import {useTheme} from '../../hooks/theme'

import {
  Container,
  BackButton,
  UserAvatarButton,
  UserAvatar,
  Title,
} from './styles'

import avatar from '../../assets/avatar.png'

interface ProfileFormData {
  name: string
  email: string
  old_password: string
  password: string
  password_confirmation: string
}

const Profile: React.FC = () => {
  const {user, updateUser} = useAuth()
  const {colors} = useTheme()

  const formRef = useRef<FormHandles>(null)
  const emailInputRef = useRef<TextInput>(null)
  const oldPasswordInputRef = useRef<TextInput>(null)
  const passwordInputRef = useRef<TextInput>(null)
  const confirmPasswordInputRef = useRef<TextInput>(null)

  const {goBack} = useNavigation()

  const handleUpdateAvatar = useCallback(async () => {
    // const options: ImagePickerOptions = {
    //   title: 'Selecione um Avatar',
    //   cancelButtonTitle: 'Cancelar',
    //   takePhotoButtonTitle: 'Usar câemra',
    //   chooseFromLibraryButtonTitle: 'Escolher da galeria',
    // }
    // ImagePicker.showImagePicker(options, (response) => {
    //   if (response.didCancel) {
    //     return
    //   }
    //   if (response.error) {
    //     Alert.alert('Erro ao atualizar seu avatar')
    //     return
    //   }
    //   const data = new FormData()
    //   data.append('avatar', {
    //     type: 'image/jpeg',
    //     name: `${user.id}.jpg`,
    //     uri:
    //       Platform.OS === 'android'
    //         ? response.uri
    //         : response.uri.replace('file://', ''),
    //   })
    //   api
    //     .patch('users/avatar', data, {
    //       headers: {'Content-Type': 'multipart/form-data'},
    //     })
    //     .then((apiResponse) => {
    //       updateUser(apiResponse.data)
    //     })
    // })
    const options: ImageLibraryOptions = {
      title: 'teste',
      custonButtons: [{name: 'fb', title: 'facebook'}],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    }

    ImagePicker.launchImageLibrary(options, (res) => {
      console.log(res.uri)
    })
  }, [updateUser, user.id])

  const handleUpdate = useCallback(
    async (data: ProfileFormData) => {
      try {
        formRef.current?.setErrors({})

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Insira um e-mail válido'),
          old_password: Yup.string(),
          password: Yup.string().when('old_password', {
            is: (val) => !!val.length,
            then: Yup.string().min(6, 'Mínimo 6 digitos'),
            otherwise: Yup.string(),
          }),
          password_confirmation: Yup.string()
            .when('old_password', {
              is: (val) => !!val.length,
              then: Yup.string().required('Campo obrigatório'),
              otherwise: Yup.string(),
            })
            .oneOf([Yup.ref('password'), null], 'Confirmação incorreta'),
        })

        await schema.validate(data, {
          abortEarly: false,
        })

        const {
          name,
          email,
          old_password,
          password,
          password_confirmation,
        } = data

        const formData = {
          name,
          email,
          ...(data.old_password
            ? {
                old_password,
                password,
                password_confirmation,
              }
            : {}),
        }

        const response = await api.put('/profile', formData)

        updateUser(response.data)

        Alert.alert(
          'Perfil atualizado!',
          'Suas informações do perfil foram atualizadas com sucesso!',
        )

        goBack()
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err)

          formRef.current?.setErrors(errors)

          return
        }

        Alert.alert(
          'Erro no atualizar',
          'Ocorreu um erro ao tentar atualizar o perfil',
        )
      }
    },
    [goBack, updateUser],
  )

  const handleGoBack = useCallback(() => {
    goBack()
  }, [goBack])

  const source = useMemo(() => {
    return user.avatar_url ? {uri: user.avatar_url} : avatar
  }, [user.avatar_url])

  return (
    <>
      <KeyboardAvoidingView
        style={{flex: 1, backgroundColor: colors.container}}
        enabled
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{
            paddingBottom: 40,
          }}>
          <Container>
            <BackButton onPress={handleGoBack}>
              <Icon name="chevron-left" size={24} color={colors.text} />
            </BackButton>

            <UserAvatarButton onPress={handleUpdateAvatar}>
              <UserAvatar source={source} />
            </UserAvatarButton>
            <View>
              <Title>Meu perfil</Title>
            </View>

            <Form initialData={user} ref={formRef} onSubmit={handleUpdate}>
              <Input
                autoCapitalize="words"
                name="name"
                icon="user"
                placeholder="Nome"
                returnKeyType="next"
                onSubmitEditing={() => {
                  emailInputRef.current?.focus()
                }}
              />

              <Input
                ref={emailInputRef}
                keyboardType="email-address"
                autoCorrect={false}
                autoCapitalize="none"
                name="email"
                icon="mail"
                placeholder="E-mail"
                returnKeyType="next"
                onSubmitEditing={() => {
                  oldPasswordInputRef.current?.focus()
                }}
              />

              <Input
                ref={oldPasswordInputRef}
                secureTextEntry
                name="old_password"
                icon="lock"
                containerStyle={{marginTop: 16}}
                placeholder="Senha atual"
                textContentType="newPassword"
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
                placeholder="Nova senha"
                textContentType="newPassword"
                returnKeyType="next"
                onSubmitEditing={() => {
                  confirmPasswordInputRef.current?.focus()
                }}
              />

              <Input
                ref={confirmPasswordInputRef}
                secureTextEntry
                name="password_confirmation"
                icon="lock"
                placeholder="Confirmar senha"
                textContentType="newPassword"
                returnKeyType="send"
                onSubmitEditing={() => formRef.current?.submitForm()}
              />
            </Form>
            <Button onPress={() => formRef.current?.submitForm()}>
              Confirmar mudanças
            </Button>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  )
}

export default Profile
