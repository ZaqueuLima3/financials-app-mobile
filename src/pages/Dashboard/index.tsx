import React, {useCallback, useEffect, useState} from 'react'
import {FlatList} from 'react-native'

import formatValue from '../../utils/formatValue'
import api from '../../service/api'
import CardResume from '../../components/CardResume'
import CardCollapse from '../../components/CardCollapse'

import {Container, CardsWrapper, Body} from './styles'

interface ResumeCard {
  id: number
  title: string
  description: string
  value: number
  formattedValue: string
  motivationPhrase: string
}

const Dashboard: React.FC = () => {
  const [account, setAccount] = useState({
    id: 1,
    title: 'Meu Saldo',
    description: '(Valor acumulado)',
    value: 0,
    formattedValue: formatValue(0),
    motivationPhrase: 'Defina suas metas e poupe com carinho',
  } as ResumeCard)

  const [balance, setBalance] = useState({
    id: 2,
    title: 'Meu balanço mensal',
    description: '(renda - despesas)',
    value: 0,
    formattedValue: formatValue(0),
    motivationPhrase: 'Você esta indo muito bem',
  } as ResumeCard)

  const [outcome, setOutcome] = useState({
    id: 3,
    title: 'Meus gastos mensal',
    description: '(despesas)',
    value: 0,
    formattedValue: formatValue(0),
    motivationPhrase: 'Lembre-se sempre dos seus objetivos',
  } as ResumeCard)

  useEffect(() => {
    async function recoverAccountResume(): Promise<void> {
      const response = await api.get('accounts/resume')
      const {allAccounts} = response.data

      setAccount((prev) => {
        return {
          ...prev,
          value: allAccounts,
          formattedValue: formatValue(allAccounts),
        }
      })
    }

    recoverAccountResume()
  }, [])

  useEffect(() => {
    async function recoverTransactionsResume(): Promise<void> {
      const response = await api.get('transactions')
      const {balance: responseBalance} = response.data

      setOutcome((prev) => ({
        ...prev,
        value: responseBalance.outcome,
        formattedValue: formatValue(responseBalance.outcome),
      }))

      setBalance((prev) => ({
        ...prev,
        value: responseBalance.total,
        formattedValue: formatValue(responseBalance.total),
      }))
    }

    recoverTransactionsResume()
  }, [])

  const handleRenderCards = useCallback(({item}) => {
    return (
      <CardsWrapper>
        <CardResume item={item} />
      </CardsWrapper>
    )
  }, [])

  return (
    <Container>
      <FlatList
        data={[account, balance, outcome]}
        keyExtractor={(item) => item.id.toString()}
        renderItem={handleRenderCards}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingRight: 20}}
      />

      <Body>
        <CardCollapse />

        <CardCollapse />

        <CardCollapse />
      </Body>
    </Container>
  )
}

export default Dashboard
