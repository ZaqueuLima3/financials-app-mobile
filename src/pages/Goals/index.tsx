import React from 'react'
import {useTheme} from '../../hooks/theme'

import CardGoals from '../../components/CardGoals'

import {Container} from './styles'

const Goals: React.FC = () => {
  const {colors} = useTheme()
  return (
    <Container bg={colors.background}>
      <CardGoals />

      <CardGoals />

      <CardGoals />
    </Container>
  )
}

export default Goals
