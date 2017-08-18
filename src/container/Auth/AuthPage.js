import React, { Component } from 'react'
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  NetInfo,
  StyleSheet
} from 'react-native'
import { Actions } from 'react-native-router-flux'

import { Button } from 'components/common'

class AuthPage extends Component {
  state = { status: '' }

  componentDidMount () {
    NetInfo.addEventListener('change', this.handleConnectionChange)

    NetInfo.fetch()
      .done((isConnected) => {
        this.setState({ status: isConnected })
      })
  }

  handleConnectionChange = (isConnected) => {
    this.setState({ status: isConnected })
    console.log(`is connected: ${this.state.status}`)
  }

  render () {
    const {
      containerStyle,
      headerTextStyle,
      footerText,
      textStyle
    } = styles

    return (
      <View style={containerStyle}>
        <StatusBar barStyle="light-content" />
        <View>
          <Text style={headerTextStyle}>Ola Boya!</Text>
          <Text style={[ headerTextStyle, { paddingTop: 0 } ]}>Selamat datang di Rentuff</Text>
        </View>
        <View>
          <Button
            style={{ backgroundColor: '#fff', top: 335 }}
            fontStyle={{ color: '#3bbeb8' }}
            onPress={() => Actions.userSignUpFirst()}
          >
            <Text style={[textStyle, { color: '#3bbeb8' }]}>
              Sign Up
            </Text>
          </Button>
          <Button
            style={{ top: 388 }}
            onPress={() => Actions.userLogin()}
          >
            <Text style={textStyle}>
              Login
            </Text>
          </Button>
          <View>
            <Text style={footerText}>By signing up, i agree to Rentuff's</Text>
            <TouchableOpacity>
              <Text style={[footerText, { marginTop: 15, marginRight: 76, textDecorationLine: 'underline' }]}>
                Terms of Service
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={[footerText, { marginTop: 15, textDecorationLine: 'underline' }]}>
                Privacy Policy
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: '#3bbeb8'
  },
  headerTextStyle: {
    color: '#fff',
    fontSize: 36,
    paddingTop: 50,
    paddingLeft: 20,
    fontFamily: 'HelveticaNeue-Bold'
  },
  footerText: {
    position: 'absolute',
    right: 20,
    top: 445,
    color: '#fff',
    fontSize: 11
  },
  textStyle: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 16,
    paddingTop: 10,
    paddingBottom: 10,
    fontFamily: 'HelveticaNeue'
  }
})

export default AuthPage
