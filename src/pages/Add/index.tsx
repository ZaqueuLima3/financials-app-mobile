import React, {useState} from 'react'
import {TouchableOpacity} from 'react-native-gesture-handler'
import Modal from 'react-native-modal'
import Icon from 'react-native-vector-icons/Feather'
import {Title, Regular} from '../../components/Text'
import {useColors} from '../../hooks/theme'

import {
  Container,
  Content,
  Header,
  Button,
  OptionWrapper,
  IconWrapper,
} from './styles'

const AddModal: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const {colors} = useColors()

  return (
    <>
      <Button
        onPress={() => {
          setModalVisible(true)
        }}>
        <Icon name="plus-circle" size={36} color={colors.text} />
      </Button>

      <Container bg={colors.container}>
        <Modal
          backdropOpacity={0.3}
          isVisible={modalVisible}
          onBackdropPress={() => setModalVisible(false)}
          style={{
            justifyContent: 'flex-end',
            margin: 0,
          }}>
          <Content bg={colors.container}>
            <Header>
              <Title>Criar</Title>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Icon name="x" size={20} color={colors.text} />
              </TouchableOpacity>
            </Header>

            <OptionWrapper onPress={() => {}}>
              <IconWrapper bg={colors.background}>
                <Icon name="credit-card" size={20} color={colors.text} />
              </IconWrapper>
              <Regular>Cartão</Regular>
            </OptionWrapper>

            <OptionWrapper onPress={() => {}}>
              <IconWrapper bg={colors.background}>
                <Icon name="pocket" size={20} color={colors.text} />
              </IconWrapper>
              <Regular>Conta</Regular>
            </OptionWrapper>

            <OptionWrapper onPress={() => {}}>
              <IconWrapper bg={colors.background}>
                <Icon name="target" size={20} color={colors.text} />
              </IconWrapper>
              <Regular>Meta</Regular>
            </OptionWrapper>

            <OptionWrapper onPress={() => {}}>
              <IconWrapper bg={colors.background}>
                <Icon name="shopping-bag" size={20} color={colors.text} />
              </IconWrapper>
              <Regular>Despesa</Regular>
            </OptionWrapper>

            <OptionWrapper onPress={() => {}}>
              <IconWrapper bg={colors.background}>
                <Icon name="dollar-sign" size={20} color={colors.text} />
              </IconWrapper>
              <Regular>Receita</Regular>
            </OptionWrapper>
          </Content>
        </Modal>
      </Container>
    </>
  )
}

export const AddDummy: React.FC = () => {
  return null
}

export default AddModal
