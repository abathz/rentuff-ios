import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  View,
  Text,
  ScrollView,
  StyleSheet
} from 'react-native'
import Calendar from 'components/Calendar'

class SelectDateRent extends Component {
  render () {
    const {
      container
    } = styles
    return (
      <View style={container}>
        <ScrollView>
          {/* <Calendar /> */}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})

export default connect()(SelectDateRent)
