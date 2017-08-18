import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Image,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Input, Button } from 'components/common'
import { loginUserUpdate, loginUser } from 'actions'

class UserLogin extends Component {
  onButtonPress () {
    const { emailLogin, passwordLogin } = this.props

    let data = {
      email: emailLogin,
      password: passwordLogin
    }

    this.props.loginUser(data)
  }

  render () {
    const {
      containerStyle,
      inputStyle,
      textStyle,
      buttonStyle,
      forgotPassword,
      errorText
    } = styles

    return (
      <View style={containerStyle}>
        <StatusBar barStyle="dark-content" />
        <View style={{ paddingTop: 50, paddingLeft: 20 }}>
          <TouchableOpacity onPress={() => Actions.pop()}>
            <Image
              style={{ width: 25, height: 25 }}
              source={require('/assets/img/back.png')}
            />
          </TouchableOpacity>
        </View>
        <Text style={textStyle}>Log In</Text>
        <View style={inputStyle}>
          <Input
            autoFocus
            label="EMAIL"
            placeholder="example@mail.com"
            value={this.props.emailLogin}
            onChangeText={value => this.props.loginUserUpdate({ prop: 'emailLogin', value })}
          />
          <Text style={errorText}>{this.props.email}</Text>
          <Input
            secureTextEntry
            label="PASSWORD"
            placeholder="password"
            style={{ marginTop: 20 }}
            value={this.props.passwordLogin}
            onChangeText={value => this.props.loginUserUpdate({ prop: 'passwordLogin', value })}
          />
          <Text style={errorText}>{this.props.password}</Text>
          <TouchableOpacity>
            <Text style={forgotPassword}>Forgot password ?</Text>
          </TouchableOpacity>
          {!this.props.email && !this.props.password ? <Text style={[errorText, { marginTop: 0 }]}>{this.props.error.message}</Text> : <Text></Text>}
          <Button style={buttonStyle} onPress={this.onButtonPress.bind(this)}>
            <Image
              style={{ height: 55, width: 55 }}
              source={require('/assets/img/next.png')} />
          </Button>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: '#fff'
  },
  textStyle: {
    paddingTop: 30,
    fontSize: 24,
    alignSelf: 'center',
    color: '#686868'
  },
  inputStyle: {
    paddingTop: 50
  },
  forgotPassword: {
    backgroundColor: 'transparent',
    color: '#686868',
    left: 35,
    top: 40
  },
  buttonStyle: {
    position: 'absolute',
    top: 250,
    left: 285,
    borderRadius: 0,
    borderWidth: 0,
    borderColor: 'transparent'
  },
  errorText: {
    fontSize: 12,
    color: 'red',
    marginTop: 25,
    marginLeft: 35,
    backgroundColor: 'transparent'
  }
})

const mapStateToProps = ({ auth }) => {
  const { emailLogin, passwordLogin, error, email, password } = auth

  return { emailLogin, passwordLogin, error, email, password }
}

export default connect(mapStateToProps, { loginUserUpdate, loginUser })(UserLogin)
