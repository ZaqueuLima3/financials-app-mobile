import React, {useMemo} from 'react'
import {FlatList, Text} from 'react-native'

import {Container} from './styles'

interface SelectMonthProps {
  onPress: (month: number) => void
}

const SelectMonth: React.FC<SelectMonthProps> = ({onPress}) => {
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

  return (
    <FlatList
      data={months}
      keyExtractor={(item) => item.toString()}
      renderItem={({item, index}) => (
        <Container onPress={() => onPress(index)}>
          <Text>{item}</Text>
        </Container>
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingRight: 20}}
    />
  )
}

export default SelectMonth
