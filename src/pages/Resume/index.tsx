import React, {useMemo} from 'react'
import {useNavigation} from '@react-navigation/native'
import {useColors} from '../../hooks/theme'
import {useAuth} from '../../hooks/auth'

import {BigTitle, Regular, Title} from '../../components/Text'

import {
  Container,
  Header,
  ImageProfile,
  Separator,
  Body,
  Goals,
  CurrentResume,
  ResumeWrapper,
  Footer,
  OkButton,
} from './styles'

import avatar from '../../assets/avatar.png'

const Resume: React.FC = () => {
  const {colors} = useColors()
  const {user} = useAuth()

  const navigation = useNavigation()

  const source = useMemo(() => {
    return user.avatar_url ? {uri: user.avatar_url} : avatar
  }, [user.avatar_url])

  return (
    <Container bg={colors.background}>
      <Header>
        <ImageProfile source={source} />

        <Title>Ola Zaqueu Santos</Title>

        <Regular align="center">
          Bem vindo ao seu resumo para novos gastos
        </Regular>
      </Header>

      <Separator />

      <Body>
        <Goals>
          <Regular>Objetivo do mes</Regular>
          <BigTitle color="secondary">R$ 550,00</BigTitle>
        </Goals>

        <CurrentResume>
          <ResumeWrapper>
            <Regular>Gastos</Regular>
            <Title>R$ 670,00</Title>
          </ResumeWrapper>

          <ResumeWrapper>
            <Regular>Receita</Regular>
            <Title>R$ 2.200,00</Title>
          </ResumeWrapper>
        </CurrentResume>

        <BigTitle align="center" style={{marginBottom: 15}}>
          Voce tem R$ <BigTitle color="secondary">R$ 980,00</BigTitle> de saldo
          para se manter no seu objetivo!
        </BigTitle>

        <Regular align="center">
          Antes de gasta-lo lembre-se que o quanto mais poupar mais rápido
          alcançara suas metas
        </Regular>
      </Body>

      <Footer>
        <OkButton onPress={() => navigation.navigate('Dashboard')}>
          <Regular color="white" weight="semibold" capitalize>
            Ok, vou poupar
          </Regular>
        </OkButton>
      </Footer>
    </Container>
  )
}

export default Resume
