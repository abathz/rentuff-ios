import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import { Input, Button } from 'components/common'
import { userDataUpdate, requestChangePhone, updateNewPhoneNumber } from 'actions'

class VerificationPhoneNumber extends Component {
  componentWillMount () {
    this.props.requestChangePhone({ phone: this.props.newPhone })
  }

  render () {
    console.log(this.props)
    const {
      containerStyle,
      inputStyle,
      buttonStyle,
      resendCode
    } = styles

    return (
      <View style={containerStyle}>
        <View style={inputStyle}>
          <Input
            autoFocus
            style={{ marginLeft: 90, marginRight: 90, justifyContent: 'center' }}
            value={this.props.verificationCode}
            onChangeText={value => this.props.userDataUpdate({ prop: 'verificationCode', value })}
          />
          <TouchableOpacity onPress={() => this.props.resendVerificationCode({ phone: this.props.newPhone })}>
            <Text style={resendCode}>Resend code</Text>
          </TouchableOpacity>
          <Button style={buttonStyle} onPress={() => this.props.updateNewPhoneNumber({ phone: this.props.newPhone, verification_code: this.props.verificationCode })}>
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

const mapStateToProps = ({ user }) => {
  const { newPhone, verificationCode } = user

  return { newPhone, verificationCode }
}

export default connect(mapStateToProps, { userDataUpdate, requestChangePhone, updateNewPhoneNumber })(VerificationPhoneNumber)
