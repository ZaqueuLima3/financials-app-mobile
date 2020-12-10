import React, {useMemo} from 'react'
import {FlatList} from 'react-native'
import {useColors} from '../../hooks/theme'
import {Regular} from '../Text'

import {Container} from './styles'

interface SelectMonthProps {
  onPress: (month: number) => void
}

const SelectMonth: React.FC<SelectMonthProps> = ({onPress}) => {
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

  return (
    <FlatList
      data={months}
      keyExtractor={(item) => item.toString()}
      renderItem={({item, index}) => (
        <Container bg={colors.container} onPress={() => onPress(index)}>
          <Regular>{item}</Regular>
        </Container>
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingRight: 20}}
    />
  )
}

export default SelectMonth
