import React, {useCallback, useState} from 'react'

import IconFeather from 'react-native-vector-icons/Feather'
import {useColors} from '../../hooks/theme'
import formatValue from '../../utils/formatValue'
import {Title, Small, Regular} from '../Text'

import {
  Container,
  Header,
  ButtonExpand,
  Body,
  TotalWrapper,
  Separator,
  More,
  Footer,
  SmallLinkButton,
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
  const {colors} = useColors()

  const [isVisible, setIsVisible] = useState(false)

  const handleOpenCard = useCallback(() => {
    setIsVisible((isVisibleState) => !isVisibleState)
  }, [])

  return (
    <Container bg={colors.container}>
      <Header>
        <Title>{title}</Title>

        <ButtonExpand onPress={handleOpenCard}>
          {isVisible ? (
            <>
              <Small style={{marginRight: 5}}>ocultar</Small>
              <IconFeather name="chevron-up" color={colors.text} size={12} />
            </>
          ) : (
            <>
              <Small style={{marginRight: 5}}>exibir</Small>
              <IconFeather name="chevron-down" color={colors.text} size={12} />
            </>
          )}
        </ButtonExpand>
      </Header>

      {isVisible && (
        <Body>
          <TotalWrapper>
            <Regular>Saldo total mensal</Regular>
            <Title>{value}</Title>
          </TotalWrapper>

          <Separator />

          <More>
            <TotalWrapper>
              <Regular>dhjska</Regular>
              <Title>dsajkhd</Title>
            </TotalWrapper>

            <TotalWrapper>
              <Regular>dhjska</Regular>
              <Title>dsajkhd</Title>
            </TotalWrapper>
          </More>
        </Body>
      )}

      <Footer>
        <SmallLinkButton onPress={() => {}}>
          <Small color="blue">ver detalhes</Small>
        </SmallLinkButton>
      </Footer>
    </Container>
  )
}

export default CardCollapse
