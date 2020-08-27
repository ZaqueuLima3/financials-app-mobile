import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import FeatherIcon from 'react-native-vector-icons/Feather'

import Dashboard from '../pages/Dashboard'
import Goals from '../pages/Goals'

const App = createBottomTabNavigator()

const AppRoutes: React.FC = () => {
  return (
    <App.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName = ''

          if (route.name === 'Dashboard') {
            iconName = 'grid'
          } else if (route.name === 'Goals') {
            iconName = 'bar-chart-2'
          }

          return <FeatherIcon name={iconName} size={size} color={color} />
        },
      })}
      tabBarOptions={{
        activeTintColor: '#3a2875',
        inactiveTintColor: 'gray',
      }}>
      <App.Screen
        name="Dashboard"
        component={Dashboard}
        options={{tabBarLabel: 'Inicio'}}
      />
      <App.Screen
        name="Goals"
        component={Goals}
        options={{tabBarLabel: 'Metas'}}
      />
    </App.Navigator>
  )
}

export default AppRoutes
