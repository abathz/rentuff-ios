import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Image,
  Text,
  View,
  DatePickerIOS,
  StatusBar,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Button } from 'components/common'
import { signUpUserUpdate } from 'actions'

const arrOfMount = []
arrOfMount['Jan'] = '01'
arrOfMount['Feb'] = '02'
arrOfMount['Mar'] = '03'
arrOfMount['Apr'] = '04'
arrOfMount['May'] = '05'
arrOfMount['Jun'] = '06'
arrOfMount['Jul'] = '07'
arrOfMount['Aug'] = '08'
arrOfMount['Sep'] = '09'
arrOfMount['Oct'] = '10'
arrOfMount['Nov'] = '11'
arrOfMount['Dec'] = '12'

class UserSignUpSecond extends Component {
  state = {
    date: new Date()
  }

  onDateChange (value) {
    this.setState({ date: value })
    let day = String(value).substring(8, 10)
    let month = String(value).substring(4, 7)
    let year = String(value).substring(11, 15)
    let str = `${year}-${arrOfMount[month]}-${day}`

    this.props.signUpUserUpdate({ prop: 'birth_date', value: str })
  }

  render () {
    const {
      containerStyle,
      inputStyle,
      textStyle,
      buttonStyle
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
        <Text style={textStyle}>Kapan kamu lahir?</Text>
        <View style={inputStyle}>
          <DatePickerIOS
            date={this.state.date}
            mode="date"
            maximumDate={new Date(2004, new Date().getMonth(), new Date().getDate())}
            onDateChange={this.onDateChange.bind(this)}
          />
          <Button style={buttonStyle} onPress={() => Actions.userSignUpThird()}>
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
    top: 270,
    left: 285,
    borderRadius: 0,
    borderWidth: 0,
    borderColor: 'transparent'
  }
})
export default connect(null, { signUpUserUpdate })(UserSignUpSecond)
