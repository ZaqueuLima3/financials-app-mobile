import React, {useCallback, useEffect, useState} from 'react'
import {FlatList, View, StatusBar, DatePickerAndroid} from 'react-native'

import {DateSchema} from 'yup'
import formatValue from '../../utils/formatValue'
import api from '../../service/api'
import SelectMonth from '../../components/SelectMonth'
import CardResume from '../../components/CardResume'
import CardCollapse from '../../components/CardCollapse'

import {Container, CardsWrapper, Body} from './styles'
import {useTheme} from '../../hooks/theme'

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

interface Transactions {
  totalOutcome: number
  totalIncome: number
  outcomes: Transaction[]
  incomes: Transaction[]
}

interface DashboardType {
  total: number
  outcome: number
  income: number
  balance: number
  transactions: Transactions
}

const Dashboard: React.FC = () => {
  const {colors} = useTheme()

  const [loading, setLoading] = useState(true)
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [transactions, setTransactions] = useState({} as Transactions)

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
    setLoading(true)
    async function recoverAccountResume(): Promise<void> {
      const response = await api.get<DashboardType>('dash', {
        params: {
          year: currentMonth.getFullYear(),
          month: currentMonth.getMonth() + 1,
        },
      })
      const {data} = response

      setAccount((prev) => {
        return {
          ...prev,
          value: data.total,
          formattedValue: formatValue(data.total),
        }
      })

      setOutcome((prev) => ({
        ...prev,
        value: data.outcome,
        formattedValue: formatValue(data.outcome),
      }))

      setIncome((prev) => ({
        ...prev,
        value: data.income,
        formattedValue: formatValue(data.income),
      }))

      setBalance((prev) => ({
        ...prev,
        value: data.balance,
        formattedValue: formatValue(data.balance),
      }))

      setTransactions(data.transactions)
      setLoading(false)
    }

    recoverAccountResume()
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
    <Container bg={colors.background}>
      <SelectMonth
        onPress={handleMonthChange}
        month={currentMonth.getMonth()}
      />

      <FlatList
        data={[account, balance, outcome]}
        keyExtractor={(item) => item.id.toString()}
        renderItem={handleRenderCards}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingRight: 20}}
      />

      <Body>
        <CardCollapse
          title="Gastos"
          relatedMonth={currentMonth}
          value={formatValue(transactions.totalOutcome)}
          transactions={transactions.outcomes}
          loading={loading}
        />

        <CardCollapse
          title="Receitas"
          relatedMonth={currentMonth}
          value={formatValue(transactions.totalIncome)}
          transactions={transactions.incomes}
          loading={loading}
        />
      </Body>
    </Container>
  )
}

export default Dashboard
