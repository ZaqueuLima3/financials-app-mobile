import React, {useCallback, useState} from 'react'

import IconFeather from 'react-native-vector-icons/Feather'
import formatValue from '../../utils/formatValue'

import {
  Container,
  Header,
  Title,
  Saldo,
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

interface Transaction {
  title: string
  paid: boolean
  type: 'income' | 'outcome'
  value: number
}

interface CardCollapseProps {
  title: string
  value: string
  transactions: Transaction[]
}

const CardCollapse: React.FC<CardCollapseProps> = ({
  title,
  transactions,
  value,
}) => {
  const [isVisible, setIsVisible] = useState(false)

  const handleOpenCard = useCallback(() => {
    setIsVisible((isVisibleState) => !isVisibleState)
  }, [])

  return (
    <Container>
      <Header>
        <Title>{title}</Title>

        <ButtonExpand onPress={handleOpenCard}>
          {isVisible ? (
            <>
              <Small>esconder</Small>
              <IconFeather name="eye-off" size={11} />
            </>
          ) : (
            <>
              <Small>exibir</Small>
              <IconFeather name="eye" size={11} />
            </>
          )}
        </ButtonExpand>
      </Header>

      <Body>
        <TotalWrapper>
          <RegularText>Saldo total mensal</RegularText>
          <Saldo visible={isVisible}>{value}</Saldo>
        </TotalWrapper>

        <Separator />

        <More>
          {transactions[0] && (
            <TotalWrapper>
              <RegularText>{transactions[0].title}</RegularText>
              <Saldo visible={isVisible}>
                {formatValue(transactions[0].value)}
              </Saldo>
            </TotalWrapper>
          )}

          {transactions[1] && (
            <TotalWrapper>
              <RegularText>{transactions[1].title}</RegularText>
              <Saldo visible={isVisible}>
                {formatValue(transactions[1].value)}
              </Saldo>
            </TotalWrapper>
          )}
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
