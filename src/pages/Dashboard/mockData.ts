export interface MockDataCard {
  id: number
  title: string
  description: string
  value: string
  motivationPhrase: string
}

export const dataCardsResume: MockDataCard[] = [
  {
    id: 1,
    title: 'Seu balanço mensal',
    description: '(renda - despesas)',
    value: 'R$ 330,00',
    motivationPhrase: 'Você esta indo muito bem',
  },
  {
    id: 2,
    title: 'Seu Saldo atual',
    description: '(Valor acumulado)',
    value: 'R$ 2.850,00',
    motivationPhrase: 'Defina suas metas e poupe com carinho',
  },
  {
    id: 3,
    title: 'Seus gastos',
    description: '(despesas)',
    value: 'R$ 738,00',
    motivationPhrase: 'Lembre-se sempre dos seus objetivos',
  },
]
