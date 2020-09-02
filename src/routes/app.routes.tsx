import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createStackNavigator} from '@react-navigation/stack'

import FeatherIcon from 'react-native-vector-icons/Feather'

import Header from '../components/Header'
import Dashboard from '../pages/Dashboard'
import Goals from '../pages/Goals'

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
            top: 40,
          },
        }}
      />
    </GoalsStack.Navigator>
  )
}

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
        style: {
          paddingTop: 20,
          paddingBottom: 20,
          height: 78,
        },
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
        component={Goals}
        options={{tabBarLabel: 'Resumo'}}
      />

      <App.Screen
        name="Settings"
        component={Goals}
        options={{tabBarLabel: 'Ajustes'}}
      />
    </App.Navigator>
  )
}

export default AppRoutes
