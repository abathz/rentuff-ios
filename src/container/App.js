import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

import Header from 'components/Header'

const App = () => {
  return (
    <View>
      <Header headerText="React" />
      <View style={styles.containerStyle}>
        <Text style={styles.textStyle}>Welcome to React native</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  containerStyle: {
    alignItems: 'center',
    marginTop: 10
  },
  textStyle: {
    fontSize: 16
  }
})

export default App
