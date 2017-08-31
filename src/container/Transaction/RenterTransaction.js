import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Text,
  View
} from 'react-native'
import { getRenterTransaction } from 'actions'

class RenterTransaction extends Component {
  componentWillMount () {
    this.props.getRenterTransaction()
  }

  render () {
    return (
      <View>
        <Text></Text>
      </View>
    )
  }
}

export default connect(null, { getRenterTransaction })(RenterTransaction)
