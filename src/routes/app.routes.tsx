import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import FeatherIcon from 'react-native-vector-icons/Feather'

import DashboardStackScreen from './stacks/dash.routes'
import GoalsStackScreen from './stacks/goals.routes'

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
          } else if (route.name === 'Resume') {
            iconName = 'coffee'
          } else if (route.name === 'Settings') {
            iconName = 'settings'
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
        component={DashboardStackScreen}
        options={{tabBarLabel: 'Inicio'}}
      />
      <App.Screen
        name="Goals"
        component={GoalsStackScreen}
        options={{tabBarLabel: 'Metas'}}
      />

      <App.Screen
        name="Resume"
        component={GoalsStackScreen}
        options={{tabBarLabel: 'Resumo'}}
      />

      <App.Screen
        name="Settings"
        component={GoalsStackScreen}
        options={{tabBarLabel: 'Ajustes'}}
      />
    </App.Navigator>
  )
}

export default AppRoutes
