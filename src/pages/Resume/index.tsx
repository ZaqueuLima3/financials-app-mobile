import React from 'react'
import {Text} from 'react-native'

import profileImage from '../../assets/profile.png'

import {
  Container,
  Header,
  ImageProfile,
  Title,
  Separator,
  Body,
  Goals,
  RegularText,
  Spotlight,
  CurrentResume,
  ResumeWrapper,
  HowMyGoals,
  Footer,
  OkButton,
  OkButtonText,
} from './styles'

const Resume: React.FC = () => {
  return (
    <Container>
      <Header>
        <ImageProfile source={profileImage} />

        <Title>Ola Zaqueu Santos</Title>

        <RegularText>Bem vindo ao seu resumo para novos gastos</RegularText>
      </Header>

      <Separator />

      <Body>
        <Goals>
          <RegularText>Objetivo do mes</RegularText>
          <Spotlight>R$ 550,00</Spotlight>
        </Goals>

        <CurrentResume>
          <ResumeWrapper>
            <RegularText>Gastos</RegularText>
            <Title>R$ 670,00</Title>
          </ResumeWrapper>

          <ResumeWrapper>
            <RegularText>Receita</RegularText>
            <Title>R$ 2.200,00</Title>
          </ResumeWrapper>
        </CurrentResume>

        <HowMyGoals>
          Voce tem R$ <Spotlight>R$ 9800,00</Spotlight> de saldo para se manter
          no seu objetivo!
        </HowMyGoals>

        <RegularText>
          Antes de gasta-lo lembre-se que o quanto mais poupar mais rápido
          alcançara suas metas
        </RegularText>
      </Body>

      <Footer>
        <OkButton onPress={() => {}}>
          <OkButtonText>Ok, vou poupar</OkButtonText>
        </OkButton>
      </Footer>
    </Container>
  )
}

export default Resume
