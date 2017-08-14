import React from 'react'
import { AppRegistry, View } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'
import App from 'container/App'

const store = createStore(reducers)

const Apps = () => {
  return (
    <Provider store={store}>
      <View>
        <App />
      </View>
    </Provider>
  )
}

AppRegistry.registerComponent('YOUR_APP_NAME', () => Apps)
