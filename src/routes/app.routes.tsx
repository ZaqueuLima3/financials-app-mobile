import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import FeatherIcon from 'react-native-vector-icons/Feather'

import DashboardStackScreen from './stacks/dash.routes'
import GoalsStackScreen from './stacks/goals.routes'
import SettingsStackScreen from './stacks/settings.routes'
import Resume from '../pages/Resume'

import AddModal, {AddDummy} from '../pages/Add'

import {useTheme} from '../hooks/theme'

const App = createBottomTabNavigator()

const AppRoutes: React.FC = () => {
  const {colors} = useTheme()

  return (
    <App.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName = ''

          if (route.name === 'Dashboard') {
            iconName = 'home'
          } else if (route.name === 'Goals') {
            iconName = 'bar-chart-2'
          } else if (route.name === 'Resume') {
            iconName = 'coffee'
          } else if (route.name === 'Settings') {
            iconName = 'settings'
          } else if (route.name === 'Add') {
            iconName = 'plus-circle'
          }

          return <FeatherIcon name={iconName} size={size} color={color} />
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.tertiary,
        inactiveTintColor: colors.text,
        style: {
          backgroundColor: colors.container,
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
        name="Add"
        component={AddDummy}
        options={{
          tabBarButton: () => <AddModal />,
        }}
      />

      <App.Screen
        name="Resume"
        component={Resume}
        options={{tabBarLabel: 'Resumo'}}
      />

      <App.Screen
        name="Settings"
        component={SettingsStackScreen}
        options={{tabBarLabel: 'Ajustes'}}
      />
    </App.Navigator>
  )
}

export default AppRoutes
