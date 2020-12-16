import React from 'react'
import {RouteProp, useRoute} from '@react-navigation/native'
import {Text, SafeAreaView, StatusBar} from 'react-native'

import HeaderTransaction from '../../components/HeaderTransaction'

import {useTheme} from '../../hooks/theme'
import {Container} from './styles'

type ParamList = {
  TransactionCreate: {
    type: 'income' | 'outcome'
  }
}

const TransactionCreate: React.FC = () => {
  const {params} = useRoute<RouteProp<ParamList, 'TransactionCreate'>>()
  const {colors} = useTheme()

  return (
    <Container bg={colors.background}>
      <HeaderTransaction type={params.type} />
      <Text>{params.type}</Text>
    </Container>
  )
}

export default TransactionCreate
