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
import { signUpUserUpdate, verifyVerificationCode, generateVerificationCode, resendVerificationCode } from 'actions'

class UserSignUpFifth extends Component {
  componentWillMount () {
    this.props.generateVerificationCode({ phone: this.props.phone })
  }

  render () {
    const {
      containerStyle,
      inputStyle,
      textStyle,
      buttonStyle,
      resendCode
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
        <Text style={textStyle}>Kode verifikasi</Text>
        <View style={inputStyle}>
          <Input
            autoFocus
            style={{ marginLeft: 90, marginRight: 90, justifyContent: 'center' }}
            value={this.props.verificationCode}
            onChangeText={value => this.props.signUpUserUpdate({ prop: 'verificationCode', value })}
          />
          <TouchableOpacity onPress={() => this.props.resendVerificationCode({ phone: this.props.phone })}>
            <Text style={resendCode}>Resend code</Text>
          </TouchableOpacity>
          <Button style={buttonStyle} onPress={() => this.props.verifyVerificationCode({ phone: this.props.phone, verification_code: this.props.verificationCode })}>
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
    top: 130,
    left: 285,
    borderRadius: 0,
    borderWidth: 0,
    borderColor: 'transparent',
    backgroundColor: 'transparent'
  },
  resendCode: {
    marginTop: 30,
    color: '#686868',
    fontSize: 13,
    alignSelf: 'center',
    backgroundColor: 'transparent'
  }
})

const mapStateToProps = ({ auth }) => {
  const { phone, verificationCode } = auth

  return { phone, verificationCode }
}

export default connect(mapStateToProps, { signUpUserUpdate, verifyVerificationCode, generateVerificationCode, resendVerificationCode })(UserSignUpFifth)
