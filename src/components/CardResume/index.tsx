import React from 'react'

import {
  Container,
  Header,
  Title,
  TextSmall,
  Body,
  Total,
  Footer,
} from './styles'

interface MockDataCard {
  title: string
  description: string
  value: string
  motivationPhrase: string
}

interface CardResumeData {
  item: MockDataCard
}

const CardResume: React.FC<CardResumeData> = ({item}) => {
  return (
    <Container>
      <Header>
        <Title>{item.title}</Title>
        <TextSmall>{item.description}</TextSmall>
      </Header>

      <Body>
        <Total>{item.value}</Total>
        <TextSmall>{item.motivationPhrase}</TextSmall>
      </Body>

      <Footer>
        <TextSmall>Dicas para conseguir Guardar mais dinheiro</TextSmall>
      </Footer>
    </Container>
  )
}

export default CardResume
