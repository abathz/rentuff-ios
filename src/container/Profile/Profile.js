import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  View,
  Text,
  StatusBar,
  TouchableHighlight,
  StyleSheet
} from 'react-native'
import { Card, CardSection } from 'components/common'
import { Actions } from 'react-native-router-flux'
import { logOutUser } from 'actions'

class Profile extends Component {
  render () {
    const {
      container,
      button
    } = styles

    return (
      <View style={container}>
        <Card>
          <CardSection>
            <TouchableHighlight style={button} activeOpacity={1} underlayColor="#eee" onPress={() => Actions.modal()}>
              <Text>Lihat dan Ubah Profile</Text>
            </TouchableHighlight>
          </CardSection>
          <CardSection>
            <TouchableHighlight style={button} activeOpacity={1} underlayColor="#eee" onPress={() => Actions.rootSetting()}>
              <Text>Setelan</Text>
            </TouchableHighlight>
          </CardSection>
          <CardSection>
            <TouchableHighlight style={button} activeOpacity={1} underlayColor="#eee" onPress={() => this.props.logOutUser()}>
              <Text>Log out</Text>
            </TouchableHighlight>
          </CardSection>
        </Card>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    backgroundColor: '#3bbeb8'
  },
  button: {
    flex: 1,
    padding: 15
  }
})

export default connect(null, { logOutUser })(Profile)
