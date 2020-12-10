import React from 'react'
import {useColors} from '../../hooks/theme'

import walpImage from '../../assets/walp.png'

import {
  Container,
  Progress,
  ProgressInt,
  Content,
  GoalImage,
  GoalsInfo,
  Wrapper,
  IconFeather,
} from './styles'
import {Small, Title} from '../Text'

const CardGoals: React.FC = () => {
  const {colors} = useColors()

  return (
    <Container bg={colors.container}>
      <Progress>
        <ProgressInt />
      </Progress>

      <Content>
        <GoalImage source={walpImage} />

        <GoalsInfo>
          <Title>Reserva de emergência</Title>
          <Wrapper>
            <IconFeather name="calendar" />
            <Small>20/05/2021</Small>
          </Wrapper>

          <Wrapper>
            <IconFeather name="target" />
            <Small>R$ 25.000,00</Small>
          </Wrapper>
        </GoalsInfo>
      </Content>
    </Container>
  )
}

export default CardGoals
