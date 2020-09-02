import React from 'react'

import CardGoals from '../../components/CardGoals'

import {Container} from './styles'

const Goals: React.FC = () => {
  return (
    <Container>
      <CardGoals />

      <CardGoals />

      <CardGoals />
    </Container>
  )
}

export default Goals
