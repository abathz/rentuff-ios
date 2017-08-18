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
import { signUpUserUpdate, checkEmail } from 'actions'

class UserSignUpThird extends Component {
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
        <Text style={textStyle}>Apa email kamu?</Text>
        <View style={inputStyle}>
          <Input
            autoFocus
            label="EMAIL"
            placeholder="example@mail.com"
            value={this.props.email}
            onChangeText={value => this.props.signUpUserUpdate({ prop: 'email', value })}
          />
          <Text style={errorText}>{this.props.error.message}</Text>
          <Button style={buttonStyle} onPress={() => this.props.checkEmail({ email: this.props.email })}>
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
    paddingTop: 30
  },
  buttonStyle: {
    position: 'absolute',
    top: 110,
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
  const { email, error } = auth

  return { email, error }
}

export default connect(mapStateToProps, { signUpUserUpdate, checkEmail })(UserSignUpThird)
