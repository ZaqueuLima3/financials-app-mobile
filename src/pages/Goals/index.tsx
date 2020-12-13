import React from 'react'
import {useColors} from '../../hooks/theme'

import CardGoals from '../../components/CardGoals'

import {Container} from './styles'

const Goals: React.FC = () => {
  const {colors} = useColors()
  return (
    <Container bg={colors.background}>
      <CardGoals />

      <CardGoals />

      <CardGoals />
    </Container>
  )
}

export default Goals
