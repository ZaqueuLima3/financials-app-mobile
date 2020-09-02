import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import Header from '../../components/Header'
import Settings from '../../pages/Settings'

const SettingsStack = createStackNavigator()

const SettingsStackScreen: React.FC = () => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="Home"
        component={Settings}
        options={{
          headerTitle: () => <Header />,
          safeAreaInsets: {
            top: 20,
          },
        }}
      />
    </SettingsStack.Navigator>
  )
}

export default SettingsStackScreen
