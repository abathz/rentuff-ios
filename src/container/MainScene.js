import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Text,
  View,
  StyleSheet
} from 'react-native'
import { Header } from 'components/common'

class MainScene extends Component {
  render () {
    const { profile } = this.props.user
    const { container } = styles

    return (
      <View style={container}>
        <Header headerText="Rentuff" />
        <View>
          <Text>{profile.first_name}</Text>
        </View>
      </View>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  const { user } = auth

  return { user }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})

export default connect(mapStateToProps)(MainScene)
