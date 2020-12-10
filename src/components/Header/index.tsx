import React from 'react'

import IconFeather from 'react-native-vector-icons/Feather'
import {useAuth} from '../../hooks/auth'
import {useColors} from '../../hooks/theme'

import profileImage from '../../assets/profile.png'
import {Title} from '../Text'

import {Container, ProfileWrapper, ImageProfile, WelcomeWrapper} from './styles'

const Header: React.FC = () => {
  const {user} = useAuth()
  const {colors} = useColors()

  return (
    <Container bg={colors.container}>
      <ProfileWrapper>
        <ImageProfile source={profileImage} />

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
