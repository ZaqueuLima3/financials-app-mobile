import React from 'react'

import Icon from 'react-native-vector-icons/Feather'
import {useAuth} from '../../hooks/auth'

import {Container, Body, Item, Text} from './styles'

const Settings: React.FC = () => {
  const {signOut} = useAuth()

  return (
    <Container>
      <Body>
        <Item onPress={() => {}}>
          <Text>Meu perfil</Text>
          <Icon name="chevron-right" size={16} color="#48576b" />
        </Item>

        <Item onPress={() => {}}>
          <Text>Notificações</Text>
          <Icon name="chevron-right" size={16} color="#48576b" />
        </Item>

        <Item onPress={() => {}}>
          <Text>Meus cartões</Text>
          <Icon name="chevron-right" size={16} color="#48576b" />
        </Item>

        <Item onPress={() => {}}>
          <Text>Minhas contas</Text>
          <Icon name="chevron-right" size={16} color="#48576b" />
        </Item>

        <Item onPress={() => {}}>
          <Text>Avaliar o App</Text>
          <Icon name="chevron-right" size={16} color="#48576b" />
        </Item>

        <Item onPress={signOut}>
          <Text>Sair do App</Text>
        </Item>
      </Body>
    </Container>
  )
}

export default Settings
