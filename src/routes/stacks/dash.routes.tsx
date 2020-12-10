import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {Platform} from 'react-native'

import Header from '../../components/Header'
import Dashboard from '../../pages/Dashboard'
import {useColors} from '../../hooks/theme'

const DashboardStack = createStackNavigator()

const DashboardStackScreen: React.FC = () => {
  const {colors} = useColors()
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
    </DashboardStack.Navigator>
  )
}

export default DashboardStackScreen
