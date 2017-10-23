import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet
} from 'react-native'
import { Actions } from 'react-native-router-flux'
import Slider from 'react-native-slider'
import { Card, CardSection } from 'components/common'
import { updateDistance } from 'actions'

class Setting extends Component {
  state = {
    value: 0
  }

  render () {
    const { count } = this.props
    console.log(count)
    const {
      container,
      button,
      slider
    } = styles

    return (
      <View style={container}>
        <Card>
          <CardSection>
            <View style={slider}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text>Distance</Text>
                <Text>{count}</Text>
              </View>
              <View>
                <Slider
                  style={{ alignItems: 'stretch' }}
                  value={count}
                  minimumValue={0}
                  maximumValue={10}
                  step={1}
                  onValueChange={value => this.props.updateDistance(value)}
                />
              </View>
            </View>
          </CardSection>
          <CardSection>
            <TouchableHighlight style={button} activeOpacity={1} underlayColor="#eee" onPress={() => Actions.account()}>
              <Text>Rekening</Text>
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
  button: {
    flex: 1,
    padding: 15
  },
  slider: {
    flex: 1,
    padding: 15
  }
})

const mapStateToProps = ({ setting }) => {
  const { count } = setting

  return { count }
}

export default connect(mapStateToProps, { updateDistance })(Setting)
