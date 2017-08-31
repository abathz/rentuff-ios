import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Text,
  View,
  StatusBar,
  AsyncStorage,
  StyleSheet
} from 'react-native'

class MainScene extends Component {
  state = { firstName: '' }

  componentWillMount () {
    AsyncStorage.getItem('firstName')
      .then(firstName => {
        this.setState({ firstName })
      })
  }

  render () {
    const { container } = styles

    return (
      <View style={container}>
        <StatusBar barStyle="dark-content"/>
        <View>
          <Text>{this.state.firstName}</Text>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})

const mapStateToProps = ({ auth }) => {
  const { user, storage } = auth

  return { user, storage }
}

export default connect(mapStateToProps)(MainScene)
