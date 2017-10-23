import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  View,
  StyleSheet
} from 'react-native'
import { updateDate } from 'actions'
class CalendarViews extends Component {
  render () {
    const {
      container
    } = styles

    return (
      <View style={container}>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  calendar: {
    paddingTop: 0
  },
  text: {
    textAlign: 'center',
    padding: 10
  }
})

export default connect(null, { updateDate })(CalendarViews)
