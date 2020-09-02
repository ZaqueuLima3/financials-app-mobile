import React from 'react'

import IconFeather from 'react-native-vector-icons/Feather'

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
  return (
    <Container>
      <ProfileWrapper>
        <ImageProfile source={profileImage} />

        <WelcomeWrapper>
          <Title>Bem Vindo</Title>
          <TextName>Zaqueu Santos</TextName>
        </WelcomeWrapper>
      </ProfileWrapper>

      <IconFeather name="bell" size={25} />
    </Container>
  )
}

export default Header
