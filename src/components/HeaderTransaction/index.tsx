import React, {useMemo} from 'react'
import IconFeather from 'react-native-vector-icons/Feather'
import {useNavigation} from '@react-navigation/native'
import {TouchableOpacity} from 'react-native'

import {useTheme} from '../../hooks/theme'

import {Title} from '../Text'

import {Container, Content, TitleWrapper} from './styles'

interface HeaderTransactionProps {
  type: 'income' | 'outcome'
}

const HeaderTransaction: React.FC<HeaderTransactionProps> = ({type}) => {
  const {goBack} = useNavigation()
  const {colors, scheme} = useTheme()

  const navigation = useNavigation()

  const bg = useMemo(() => {
    if (scheme.includes('dark')) {
      return colors.container
    }

    return type === 'outcome' ? colors.danger : colors.primary
  }, [colors.container, colors.danger, colors.primary, scheme, type])

  return (
    <Container bg={bg}>
      <Content onPress={() => navigation.navigate('Profile')}>
        <TouchableOpacity onPress={() => goBack()}>
          <IconFeather name="arrow-left" color={colors.white} size={25} />
        </TouchableOpacity>
        <TitleWrapper>
          <Title color="white">Nova despesa</Title>
        </TitleWrapper>
        <IconFeather name="info" color={colors.white} size={25} />
      </Content>
    </Container>
  )
}

export default HeaderTransaction
