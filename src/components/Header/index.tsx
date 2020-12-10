import React from 'react'

import IconFeather from 'react-native-vector-icons/Feather'
import {useAuth} from '../../hooks/auth'

import profileImage from '../../assets/profile.png'

import {
  Container,
  ProfileWrapper,
  ImageProfile,
  WelcomeWrapper,
  Title,
  TextName,
} from './styles'

const Header: React.FC = () => {
  const {user} = useAuth()

  return (
    <Container>
      <ProfileWrapper>
        <ImageProfile source={profileImage} />

        <WelcomeWrapper>
          <Title>Bem Vindo (a)</Title>
          <TextName>{user.name}</TextName>
        </WelcomeWrapper>
      </ProfileWrapper>

      <IconFeather name="bell" size={25} />
    </Container>
  )
}

export default Header
