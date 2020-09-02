import React from 'react'

import walpImage from '../../assets/walp.png'

import {
  Container,
  Progress,
  ProgressInt,
  Content,
  GoalImage,
  GoalsInfo,
  Title,
  Wrapper,
  IconFeather,
  SmallText,
} from './styles'

const CardGoals: React.FC = () => {
  return (
    <Container>
      <Progress>
        <ProgressInt />
      </Progress>

      <Content>
        <GoalImage source={walpImage} />

        <GoalsInfo>
          <Title>Reserva de emergência</Title>
          <Wrapper>
            <IconFeather name="calendar" />
            <SmallText>20/05/2021</SmallText>
          </Wrapper>

          <Wrapper>
            <IconFeather name="target" />
            <SmallText>R$ 25.000,00</SmallText>
          </Wrapper>
        </GoalsInfo>
      </Content>
    </Container>
  )
}

export default CardGoals
