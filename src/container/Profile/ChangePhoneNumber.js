import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Image,
  Text,
  View,
  StyleSheet
} from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Input, Button } from 'components/common'
import { userDataUpdate } from 'actions'

class ChangePhoneNumber extends Component {
  render () {
    const {
      containerStyle,
      inputStyle,
      buttonStyle,
      codePhone
    } = styles

    return (
      <View style={containerStyle}>
        <View style={inputStyle}>
          <Text style={codePhone}>+62</Text>
          <Input
            style={{ flex: 9 }}
            autoFocus
            label="MOBILE"
            placeholder=""
            value={this.props.newPhone}
            onChangeText={value => this.props.userDataUpdate({ prop: 'newPhone', value })}
          />
          <Button style={buttonStyle} onPress={() => Actions.verificationPhoneNumber()}>
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

const mapStateToProps = ({ user }) => {
  const { newPhone } = user

  return { newPhone }
}

export default connect(mapStateToProps, { userDataUpdate })(ChangePhoneNumber)
