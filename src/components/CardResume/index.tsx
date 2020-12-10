import React from 'react'
import {useColors} from '../../hooks/theme'
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
  const {colors} = useColors()
  return (
    <Container bg={colors.container}>
      <Header>
        <Title>{item.title}</Title>
        <Small>{item.description}</Small>
      </Header>

      <Body>
        <BigTitle>{item.formattedValue}</BigTitle>
        <Small>{item.motivationPhrase}</Small>
      </Body>

      <Footer bg={colors.contrastDark}>
        <Small>Dicas para conseguir Guardar mais dinheiro</Small>
      </Footer>
    </Container>
  )
}

export default CardResume
