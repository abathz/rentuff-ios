import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet
} from 'react-native'
import {
  LazyloadScrollView,
  LazyloadView,
  LazyloadImage
} from 'react-native-lazyload'
import { Actions } from 'react-native-router-flux'
import { Spinner } from 'components/common'
import { getStuffRenterByCategory } from 'actions'

class RenterStuffNonMotor extends Component {
  componentDidMount () {
    this.props.getStuffRenterByCategory(this.props.id)
  }

  renderListOfStuff () {
    const { stuffs } = this.props.allStuff
    const {
      imageStyle,
      stuffName
    } = styles

    return stuffs.map(data => {
      return (
        <View key={data.id_stuff}>
          <TouchableWithoutFeedback onPress={() => Actions.mapViewRenter({ idMap: 1, idStuff: data.id_stuff })}>
            <LazyloadImage host="lazyload-renter" style={imageStyle} source={{ uri: data.stuff_photo }} />
          </TouchableWithoutFeedback>
          <Text style={stuffName}>{data.stuff_name}</Text>
        </View>
      )
    })
  }

  render () {
    const {
      container,
      content
    } = styles

    const { allStuff } = this.props

    if (!allStuff) { return <Spinner /> }

    return (
      <View style={{ flex: 1 }}>
        <LazyloadScrollView name="lazyload-renter" style={container}>
          <View style={content}>
            {this.renderListOfStuff()}
          </View>
        </LazyloadScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff'
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  imageStyle: {
    width: 150,
    height: 150,
    marginBottom: 5
  },
  stuffName: {
    paddingBottom: 10,
    fontSize: 13
  }
})

const mapStateToProps = ({ renter }) => {
  const { allStuff } = renter

  return { allStuff }
}

export default connect(mapStateToProps, { getStuffRenterByCategory })(RenterStuffNonMotor)
