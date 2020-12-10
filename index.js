import React from 'react'
import {AppRegistry} from 'react-native'
import 'intl'
import 'intl/locale-data/jsonp/pt-BR'

import App from './src/App'
import {name as appName} from './app.json'
import AppProvider from './src/context'

const YouPlan = () => (
  <AppProvider>
    <App />
  </AppProvider>
)

AppRegistry.registerComponent(appName, () => YouPlan)
