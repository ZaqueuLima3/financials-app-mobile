import React, {useCallback, useState} from 'react'

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
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenCard = useCallback(() => {
    setIsOpen((isOpenState) => !isOpenState)
  }, [])

  return (
    <Container>
      <Header>
        <Title>Carteira</Title>

        <ButtonExpand onPress={handleOpenCard}>
          {isOpen ? (
            <>
              <Small>ocultar</Small>
              <IconFeather name="chevron-up" size={11} />
            </>
          ) : (
            <>
              <Small>exibir</Small>
              <IconFeather name="chevron-down" size={11} />
            </>
          )}
        </ButtonExpand>
      </Header>

      {isOpen && (
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
      )}

      <Footer>
        <SmallLinkButton onPress={() => {}}>
          <SmallLinkText>ver detalhes</SmallLinkText>
        </SmallLinkButton>
      </Footer>
    </Container>
  )
}

export default CardCollapse
