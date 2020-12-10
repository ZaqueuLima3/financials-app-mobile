import React, {useCallback, useEffect, useState} from 'react'
import {FlatList, View} from 'react-native'

import formatValue from '../../utils/formatValue'
import api from '../../service/api'
import SelectMonth from '../../components/SelectMonth'
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

interface Transaction {
  title: string
  paid: boolean
  type: 'income' | 'outcome'
  value: number
}

const Dashboard: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [transactions, setTransactions] = useState([] as Transaction[])

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

  const [income, setIncome] = useState({
    id: 3,
    title: 'Minhas receitas mensal',
    description: '(receitas)',
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

      setIncome((prev) => ({
        ...prev,
        value: responseBalance.income,
        formattedValue: formatValue(responseBalance.income),
      }))

      setBalance((prev) => ({
        ...prev,
        value: responseBalance.total,
        formattedValue: formatValue(responseBalance.total),
      }))
    }

    recoverTransactionsResume()
  }, [])

  useEffect(() => {
    async function getTransactions(): Promise<void> {
      const response = await api.get('transactions/month', {
        params: {
          year: currentMonth.getFullYear(),
          month: currentMonth.getMonth() + 1,
        },
      })

      setTransactions(response.data)
    }

    getTransactions()
  }, [currentMonth])

  const handleMonthChange = useCallback((month: number) => {
    const date = new Date()
    date.setMonth(month)
    setCurrentMonth(date)
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
      <View>
        <SelectMonth onPress={handleMonthChange} />
      </View>

      <View>
        <FlatList
          data={[account, balance, outcome]}
          keyExtractor={(item) => item.id.toString()}
          renderItem={handleRenderCards}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingRight: 20}}
        />
      </View>

      <Body>
        <CardCollapse
          title="Gastos"
          value={outcome.formattedValue}
          transactions={transactions.filter(
            (transaction) => transaction.type === 'outcome',
          )}
        />

        <CardCollapse
          title="Receitas"
          value={income.formattedValue}
          transactions={transactions.filter(
            (transaction) => transaction.type === 'income',
          )}
        />
        <CardCollapse
          title="Receitas"
          value={income.formattedValue}
          transactions={transactions.filter(
            (transaction) => transaction.type === 'income',
          )}
        />
      </Body>
    </Container>
  )
}

export default Dashboard
