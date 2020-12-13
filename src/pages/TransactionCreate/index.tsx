import React from 'react'
import {RouteProp, useRoute} from '@react-navigation/native'
import {Text, SafeAreaView, StatusBar} from 'react-native'

import HeaderTransaction from '../../components/HeaderTransaction'

import {useColors} from '../../hooks/theme'
import {Container} from './styles'

type ParamList = {
  TransactionCreate: {
    type: 'income' | 'outcome'
  }
}

const TransactionCreate: React.FC = () => {
  const {params} = useRoute<RouteProp<ParamList, 'TransactionCreate'>>()
  const {colors} = useColors()
  return (
    <Container bg={colors.background}>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="rgba(0, 0, 0, 0.251)"
        // backgroundColor="red"
      />
      <HeaderTransaction type={params.type} />
      <Text>{params.type}</Text>
    </Container>
  )
}

export default TransactionCreate
