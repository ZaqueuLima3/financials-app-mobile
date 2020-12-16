import React from 'react'
import {getShadow} from '../../styles'
import {useTheme} from '../../hooks/theme'
import {Title, Small, BigTitle} from '../Text'
import {Container, Header, Body, Footer} from './styles'

interface ResumeCard {
  id: number
  title: string
  description: string
  value: number
  formattedValue: string
  motivationPhrase: string
}

interface CardResumeData {
  item: ResumeCard
}

const CardResume: React.FC<CardResumeData> = ({item}) => {
  const {colors} = useTheme()
  return (
    <Container
      style={{
        ...getShadow(3),
      }}
      bg={colors.container}>
      <Header>
        <Title>{item.title}</Title>
        <Small>{item.description}</Small>
      </Header>

      <Body>
        <BigTitle>{item.formattedValue}</BigTitle>
        <Small align="center">{item.motivationPhrase}</Small>
      </Body>

      <Footer bg={colors.contrastDark}>
        <Small align="center">Dicas para conseguir Guardar mais dinheiro</Small>
      </Footer>
    </Container>
  )
}

export default CardResume
