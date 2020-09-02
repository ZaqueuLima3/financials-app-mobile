import React from 'react'

import IconFeather from 'react-native-vector-icons/Feather'

import {
  Container,
  Header,
  Title,
  ButtonExpand,
  Small,
  Body,
  TotalWrapper,
  RegularText,
  Separator,
  More,
  Footer,
  SmallLinkButton,
  SmallLinkText,
} from './styles'

const CardCollapse: React.FC = () => {
  return (
    <Container>
      <Header>
        <Title>Receitas</Title>

        <ButtonExpand onPress={() => {}}>
          <Small>ocultar</Small>
          <IconFeather name="chevron-up" size={11} />
        </ButtonExpand>
      </Header>

      <Body>
        <TotalWrapper>
          <RegularText>Saldo total mensal</RegularText>
          <Title>R$ 2.200,00</Title>
        </TotalWrapper>

        <Separator />

        <More>
          <TotalWrapper>
            <RegularText>Pagamento</RegularText>
            <Title>R$ 2.200,00</Title>
          </TotalWrapper>

          <TotalWrapper>
            <RegularText>Vale refeição</RegularText>
            <Title>R$ 2.200,00</Title>
          </TotalWrapper>
        </More>
      </Body>

      <Footer>
        <SmallLinkButton onPress={() => {}}>
          <SmallLinkText>ver detalhes</SmallLinkText>
        </SmallLinkButton>
      </Footer>
    </Container>
  )
}

export default CardCollapse
