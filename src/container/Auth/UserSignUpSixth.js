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
import { signUpUserUpdate, signUpUser } from 'actions'

class UserSignUpSixth extends Component {
  state = {
    password: '',
    passwordConfirm: ''
  }

  onSubmit () {
    const { firstName, lastName, birth_date, email, phone, password, passwordConfirm } = this.props

    let data = { first_name: firstName, last_name: lastName, birth_date, email, phone, password }

    if (password.length < 8) {
      this.setState({ password: 'The password must be at least 8 characters' })
    } else if (passwordConfirm !== password) {
      this.setState({ passwordConfirm: 'The password confirmation does not match' })
    } else {
      this.props.signUpUser(data)
    }
  }

  render () {
    const {
      containerStyle,
      inputStyle,
      textStyle,
      buttonStyle,
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
        <Text style={textStyle}>Buat password</Text>
        <View style={inputStyle}>
          <Input
            autoFocus
            secureTextEntry
            placeholder="Password"
            value={this.props.password}
            onChangeText={value => this.props.signUpUserUpdate({ prop: 'password', value })}
          />
          <Text style={errorText}>{this.state.password}</Text>
          <Input
            secureTextEntry
            placeholder="Konfirmasi password"
            style={{ marginTop: 20 }}
            value={this.props.passwordConfirm}
            onChangeText={value => this.props.signUpUserUpdate({ prop: 'passwordConfirm', value })}
          />
          <Text style={errorText}>{this.state.passwordConfirm}</Text>
          <Button style={buttonStyle} onPress={this.onSubmit.bind(this)}>
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
    color: '#686868',
    backgroundColor: 'transparent'
  },
  inputStyle: {
    paddingTop: 30,
    backgroundColor: 'transparent'
  },
  buttonStyle: {
    position: 'absolute',
    top: 220,
    left: 285,
    borderRadius: 0,
    borderWidth: 0,
    borderColor: 'transparent',
    backgroundColor: 'transparent'
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
  const { firstName, lastName, birth_date, email, phone, password, passwordConfirm } = auth

  return { firstName, lastName, birth_date, email, phone, password, passwordConfirm }
}

export default connect(mapStateToProps, { signUpUserUpdate, signUpUser })(UserSignUpSixth)
