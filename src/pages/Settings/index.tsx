import React from 'react'
import AsyncStorage from '@react-native-community/async-storage'

import Icon from 'react-native-vector-icons/Feather'
import {useNavigation} from '@react-navigation/native'
import {STORAGE} from '../../config/constants'
import {Regular} from '../../components/Text'
import {useAuth} from '../../hooks/auth'
import {useColors} from '../../hooks/theme'

import {Container, Body, Item} from './styles'

const Settings: React.FC = () => {
  const {signOut} = useAuth()
  const {colors, setTheme} = useColors()

  const navigation = useNavigation()

  const handleSetTheme = async (): Promise<void> => {
    const theme = await AsyncStorage.getItem(STORAGE.THEME)
    const value = theme === 'light' ? 'dark' : 'light'
    setTheme(value)
  }

  return (
    <Container bg={colors.container}>
      <Body>
        <Item onPress={() => navigation.navigate('Profile')}>
          <Regular>Meu perfil</Regular>
          <Icon name="chevron-right" size={16} color={colors.text} />
        </Item>

        <Item onPress={() => {}}>
          <Regular>Notificações</Regular>
          <Icon name="chevron-right" size={16} color={colors.text} />
        </Item>

        <Item onPress={() => {}}>
          <Regular>Meus cartões</Regular>
          <Icon name="chevron-right" size={16} color={colors.text} />
        </Item>

        <Item onPress={() => {}}>
          <Regular>Minhas contas</Regular>
          <Icon name="chevron-right" size={16} color={colors.text} />
        </Item>

        <Item onPress={() => {}}>
          <Regular>Avaliar o App</Regular>
          <Icon name="chevron-right" size={16} color={colors.text} />
        </Item>

        <Item onPress={handleSetTheme}>
          <Regular>Mudar Tema</Regular>
        </Item>
        <Item onPress={signOut}>
          <Regular>Sair do App</Regular>
        </Item>
      </Body>
    </Container>
  )
}

export default Settings
