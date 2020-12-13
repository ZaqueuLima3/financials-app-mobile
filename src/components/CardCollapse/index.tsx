import React, {useCallback, useState} from 'react'
import {format} from 'date-fns'
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
  relatedMonth: Date
}

const CardCollapse: React.FC<CardCollapseProps> = ({
  title,
  transactions,
  value,
  relatedMonth,
}) => {
  const {colors} = useColors()

  const [isVisible, setIsVisible] = useState(false)

  const handleOpenCard = useCallback(() => {
    setIsVisible((prev) => !prev)
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
            <Regular>
              {`${title}: `}
              <Regular weight="semibold">
                {format(relatedMonth, 'MM/yyyy')}
              </Regular>
            </Regular>
            <Title>{value}</Title>
          </TotalWrapper>

          {transactions?.length > 0 && (
            <>
              <Separator />
              <More>
                {transactions.map((transaction) => (
                  <TotalWrapper key={transaction.title}>
                    <Regular>{transaction.title}</Regular>
                    <Title>{formatValue(transaction.value)}</Title>
                  </TotalWrapper>
                ))}
              </More>
            </>
          )}
        </Body>
      )}

      <Footer>
        <SmallLinkButton onPress={() => {}}>
          <Small color="primary">ver detalhes</Small>
        </SmallLinkButton>
      </Footer>
    </Container>
  )
}

export default CardCollapse
