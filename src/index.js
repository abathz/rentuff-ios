import React from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import reducers from './reducers'
import Router from './Router'

const Apps = () => {
  const store = createStore(reducers, applyMiddleware(ReduxThunk))
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}

AppRegistry.registerComponent('Rentuff', () => Apps)
