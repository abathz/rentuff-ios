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
import { signUpUserUpdate } from 'actions'

class UserSignUpFourth extends Component {
  render () {
    const {
      containerStyle,
      inputStyle,
      textStyle,
      buttonStyle,
      codePhone
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
        <Text style={textStyle}>Verifikasi Nomor Handphone</Text>
        <View style={inputStyle}>
          <Text style={codePhone}>+62</Text>
          <Input
            style={{ flex: 9 }}
            autoFocus
            label="MOBILE"
            placeholder=""
            value={this.props.phone}
            onChangeText={value => this.props.signUpUserUpdate({ prop: 'phone', value })}
          />
          <Button style={buttonStyle} onPress={() => Actions.userSignUpFifth()}>
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
    borderColor: 'transparent'
  },
  codePhone: {
    flex: 1,
    fontSize: 18,
    paddingLeft: 35,
    paddingTop: 27,
    color: '#b3b2b4'
  },
  inputStyle: {
    flex: 1,
    paddingTop: 30,
    flexDirection: 'row',
    borderColor: 'transparent'
  },
  buttonStyle: {
    position: 'absolute',
    top: 120,
    left: 285,
    borderRadius: 0,
    borderWidth: 0,
    borderColor: 'transparent'
  }
})

const mapStateToProps = ({ auth }) => {
  const { phone } = auth

  return { phone }
}

export default connect(mapStateToProps, { signUpUserUpdate })(UserSignUpFourth)
