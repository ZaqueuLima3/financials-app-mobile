import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import Header from '../../components/Header'
import Dashboard from '../../pages/Dashboard'

const DashboardStack = createStackNavigator()

const DashboardStackScreen: React.FC = () => {
  return (
    <DashboardStack.Navigator>
      <DashboardStack.Screen
        name="Home"
        component={Dashboard}
        options={{
          headerTitle: () => <Header />,
          safeAreaInsets: {
            top: 20,
          },
        }}
      />
    </DashboardStack.Navigator>
  )
}

export default DashboardStackScreen
