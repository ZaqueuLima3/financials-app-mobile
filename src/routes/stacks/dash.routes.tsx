import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {Platform} from 'react-native'

import Dashboard from '../../pages/Dashboard'
import TransactionCreate from '../../pages/TransactionCreate'

import Header from '../../components/Header'

import {useTheme} from '../../hooks/theme'

const DashboardStack = createStackNavigator()

const DashboardStackScreen: React.FC = () => {
  const {colors} = useTheme()
  return (
    <DashboardStack.Navigator>
      <DashboardStack.Screen
        name="Home"
        component={Dashboard}
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
      <DashboardStack.Screen
        name="TransactionCreate"
        component={TransactionCreate}
        options={{
          headerShown: false,
          safeAreaInsets: {
            top: Platform.OS === 'ios' ? 60 : 20,
          },
        }}
      />
    </DashboardStack.Navigator>
  )
}

export default DashboardStackScreen
