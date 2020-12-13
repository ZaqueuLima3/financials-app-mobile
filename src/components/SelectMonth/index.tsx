import React, {useCallback, useMemo} from 'react'
import {FlatList} from 'react-native'
import {useColors} from '../../hooks/theme'
import {Regular} from '../Text'

import {Container} from './styles'

interface SelectMonthProps {
  onPress: (month: number) => void
  month: number
}

const SelectMonth: React.FC<SelectMonthProps> = ({onPress, month}) => {
  const {colors} = useColors()
  const months = useMemo(
    () => [
      'jan',
      'fev',
      'mar',
      'abr',
      'mai',
      'jun',
      'jul',
      'ago',
      'set',
      'out',
      'nov',
      'dez',
    ],
    [],
  )

  const getColors = useCallback(
    (index) => {
      const active = index === month
      return active ? colors.primary : colors.container
    },
    [colors.container, colors.primary, month],
  )

  return (
    <FlatList
      data={months}
      keyExtractor={(item) => item.toString()}
      renderItem={({item, index}) => (
        <Container bg={getColors(index)} onPress={() => onPress(index)}>
          <Regular color={index === month ? 'white' : 'text'}>{item}</Regular>
        </Container>
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingRight: 20}}
    />
  )
}

export default SelectMonth
