import React from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import reducers from './reducers'
import Router from './Router'

const Apps = () => {
  const store = createStore(reducers, applyMiddleware(ReduxThunk))
  // const store = createStore(
  //   reducers,
  //   {},
  //   compose(
  //     applyMiddleware(ReduxThunk)
  //   ),
  //   autoRehydrate()
  // )

  // persistStore(store, { storage: AsyncStorage }, () => {
  //   console.log('restored')
  // })

  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}

AppRegistry.registerComponent('Rentuff', () => Apps)
