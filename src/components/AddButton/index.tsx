import React from 'react'
import {StyleSheet, View} from 'react-native'

import Icon from 'react-native-vector-icons/Feather'
import ActionButton from '../Menu/ActionButton'

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
})

const AddButton: React.FC = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#f3f3f3', zIndex: 999}}>
      <ActionButton>
        <ActionButton.Item
          buttonColor="#9b59b6"
          onPress={() => console.log('notes tapped!')}>
          <Icon name="home" style={styles.actionButtonIcon} />
        </ActionButton.Item>

        <ActionButton.Item
          buttonColor="#3498db"
          onPress={() => console.log('test tapped!')}>
          <Icon name="home" style={styles.actionButtonIcon} />
        </ActionButton.Item>

        <ActionButton.Item
          buttonColor="#1abc9c"
          onPress={() => console.log('help tapped!')}>
          <Icon name="home" style={styles.actionButtonIcon} />
        </ActionButton.Item>
      </ActionButton>
    </View>
  )
}

export default AddButton
