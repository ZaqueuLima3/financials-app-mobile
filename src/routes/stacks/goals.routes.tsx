import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {Platform} from 'react-native'

import Header from '../../components/Header'
import Goals from '../../pages/Goals'
import {useTheme} from '../../hooks/theme'

const GoalsStack = createStackNavigator()

const GoalsStackScreen: React.FC = () => {
  const {colors} = useTheme()
  return (
    <GoalsStack.Navigator>
      <GoalsStack.Screen
        name="Goals"
        component={Goals}
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
    </GoalsStack.Navigator>
  )
}

export default GoalsStackScreen
