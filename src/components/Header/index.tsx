import React, {useMemo} from 'react'

import IconFeather from 'react-native-vector-icons/Feather'
import {useNavigation} from '@react-navigation/native'
import {useAuth} from '../../hooks/auth'
import {useTheme} from '../../hooks/theme'

import avatar from '../../assets/avatar.png'
import {Title} from '../Text'

import {Container, ProfileWrapper, ImageProfile, WelcomeWrapper} from './styles'

const Header: React.FC = () => {
  const {user} = useAuth()
  const {colors} = useTheme()

  const navigation = useNavigation()

  const source = useMemo(() => {
    return user.avatar_url ? {uri: user.avatar_url} : avatar
  }, [user.avatar_url])

  return (
    <Container bg={colors.container}>
      <ProfileWrapper onPress={() => navigation.navigate('Profile')}>
        <ImageProfile source={source} />

        <WelcomeWrapper>
          <Title>Bem Vindo (a)</Title>
          <Title color="secondary">{user.name}</Title>
        </WelcomeWrapper>
      </ProfileWrapper>

      <IconFeather name="bell" color={colors.text} size={25} />
    </Container>
  )
}

export default Header
