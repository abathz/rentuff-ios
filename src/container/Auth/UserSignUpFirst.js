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

class UserSignUpFirst extends Component {
  state = {
    firstName: '',
    lastName: '',
    error: ''
  }

  onSubmit () {
    if (!this.props.firstName && !this.props.lastName) {
      this.setState({ firstName: 'The first name field is required', lastName: 'The last name field is required' })
    } else if (!this.props.firstName) {
      this.setState({ firstName: 'The first name field is required' })
    } else if (!this.props.lastName) {
      this.setState({ lastName: 'The last name field is required' })
    } else {
      Actions.userSignUpSecond()
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
        <Text style={textStyle}>Siapa nama kamu?</Text>
        <View style={inputStyle}>
          <Input
            autoFocus
            label="FIRST NAME"
            placeholder="Firstname"
            value={this.props.firstName}
            onChangeText={value => this.props.signUpUserUpdate({ prop: 'firstName', value })}
            onChange={() => this.setState({ firstName: '' })}
          />
          <Text style={errorText}>{this.state.firstName}</Text>
          <Input
            label="LAST NAME"
            placeholder="Lastname"
            style={{ marginTop: 20 }}
            value={this.props.lastName}
            onChangeText={value => this.props.signUpUserUpdate({ prop: 'lastName', value })}
            onChange={() => this.setState({ lastName: '' })}
          />
          <Text style={errorText}>{this.state.lastName}</Text>
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
    color: '#686868'
  },
  inputStyle: {
    paddingTop: 50
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
  const { firstName, lastName } = auth

  return { firstName, lastName }
}

export default connect(mapStateToProps, { signUpUserUpdate })(UserSignUpFirst)
