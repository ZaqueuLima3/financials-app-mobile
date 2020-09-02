import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import Header from '../../components/Header'
import Goals from '../../pages/Goals'

const GoalsStack = createStackNavigator()

const GoalsStackScreen: React.FC = () => {
  return (
    <GoalsStack.Navigator>
      <GoalsStack.Screen
        name="Home"
        component={Goals}
        options={{
          headerTitle: () => <Header />,
          safeAreaInsets: {
            top: 20,
          },
        }}
      />
    </GoalsStack.Navigator>
  )
}

export default GoalsStackScreen
