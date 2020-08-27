import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import Dashboard from '../pages/Dashboard'

const App = createBottomTabNavigator()

const AppRoutes: React.FC = () => {
  return (
    <App.Navigator>
      <App.Screen name="Dashboard" component={Dashboard} />
    </App.Navigator>
  )
}

export default AppRoutes
