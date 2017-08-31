import React, { Component } from 'react'
import {
  View,
  Text,
  AsyncStorage,
  StatusBar,
  StyleSheet
} from 'react-native'
import { Actions } from 'react-native-router-flux'

class SplashScreen extends Component {
  state = { status: '' }

  componentDidMount () {
    AsyncStorage.getItem('api')
      .then(value => {
        setTimeout(() => {
          if (value) {
            Actions.tabbar()
          } else {
            Actions.auth()
          }
        }, 500)
      })
  }
  render () {
    const { container } = styles

    return (
      <View style={container}>
        <StatusBar barStyle="dark-content" />
        <Text>Rentuff</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default SplashScreen
