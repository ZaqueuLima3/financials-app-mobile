import React, {useMemo} from 'react'

import IconFeather from 'react-native-vector-icons/Feather'
import {useNavigation} from '@react-navigation/native'
import {StatusBar} from 'react-native'
import {useAuth} from '../../hooks/auth'
import {useColors} from '../../hooks/theme'

import avatar from '../../assets/avatar.png'
import {Title} from '../Text'

import {Container, Content, TitleWrapper} from './styles'

interface HeaderTransactionProps {
  type: 'income' | 'outcome'
}

const HeaderTransaction: React.FC<HeaderTransactionProps> = ({type}) => {
  const {user} = useAuth()
  const {colors} = useColors()

  const navigation = useNavigation()

  const bg = useMemo(() => {
    return type === 'outcome' ? colors.danger : colors.primary
  }, [colors.danger, colors.primary, type])

  return (
    <Container bg={bg}>
      <Content onPress={() => navigation.navigate('Profile')}>
        <IconFeather name="arrow-left" color={colors.white} size={25} />
        <TitleWrapper>
          <Title color="white">Nova despesa</Title>
        </TitleWrapper>
        <IconFeather name="info" color={colors.white} size={25} />
      </Content>
    </Container>
  )
}

export default HeaderTransaction
