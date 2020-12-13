import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {Platform} from 'react-native'

import Header from '../../components/Header'
import Settings from '../../pages/Settings'
import Profile from '../../pages/Profile'
import {useColors} from '../../hooks/theme'

const SettingsStack = createStackNavigator()

const SettingsStackScreen: React.FC = () => {
  const {colors} = useColors()
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="Set"
        component={Settings}
        options={{
          headerTitle: () => <Header />,
          safeAreaInsets: {
            top: Platform.OS === 'ios' ? 60 : 20,
          },
          headerStyle: {
            backgroundColor: colors.container,
          },
        }}
      />
      <SettingsStack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          safeAreaInsets: {
            top: Platform.OS === 'ios' ? 60 : 20,
          },
        }}
      />
    </SettingsStack.Navigator>
  )
}

export default SettingsStackScreen
