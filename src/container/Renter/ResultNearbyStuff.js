import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  View,
  Text,
  TouchableWithoutFeedback,
  StyleSheet
} from 'react-native'
import {
  LazyloadScrollView,
  LazyloadImage
} from 'react-native-lazyload'
import { Actions } from 'react-native-router-flux'
import { Spinner } from 'components/common'
import { getStuffNearby } from 'actions'

class ResultNearbyStuff extends Component {
  componentWillMount () {
    const { idStuff, address_latitude, address_longitude } = this.props

    let data = {
      idStuff,
      address_latitude,
      address_longitude
    }

    this.props.getStuffNearby(data)
  }

  renderListOfStuff () {
    const {
      desc,
      image,
      textBlue,
      descText
    } = styles
    const { lends } = this.props.stuffNearest

    return lends.map(data => {
      return (
        <View key={data.id_lend}>
          <TouchableWithoutFeedback onPress={() => Actions.detailsStuff({ id: data.id_lend, distance: data.distance })}>
            <LazyloadImage host="lazyload-nearest" style={image} source={{ uri: data.photo }} />
          </TouchableWithoutFeedback>
          <View style={desc}>
            {data.additional_price === 0
              ? <View style={{ width: 150 }}>
                <Text style={descText}>Rp. {data.price} <Text style={textBlue}>/ Hari</Text></Text>
                <Text style={[descText, { color: '#3bbeb8' }]}>{(data.distance).toFixed(1)} Km dari kamu</Text>
                <Text style={[descText, { color: '#3bbeb8' }]} numberOfLines={1} ellipsizeMode={'tail'}>{data.address_line}</Text>
              </View>
              : <View style={{ width: 150 }}>
                <Text style={descText}>Rp. {data.price} <Text style={textBlue}>hari pertama</Text></Text>
                <Text style={[descText, { color: '#3bbeb8' }]}>Rp. {data.additional_price} <Text style={textBlue}>hari kedua</Text></Text>
                <Text style={[descText, { color: '#3bbeb8' }]}>{(data.distance).toFixed(1)} Km dari kamu</Text>
              </View>}
          </View>
        </View>
      )
    })
  }

  render () {
    const {
      container,
      content
    } = styles

    const {
      stuffNearest
    } = this.props

    if (!stuffNearest) { return <Spinner /> }

    return (
      <View style={container}>
        <LazyloadScrollView name="lazyload-nearest">
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
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 20
  },
  image: {
    width: 155,
    height: 155
  },
  desc: {
    marginVertical: 5
  },
  descText: {
    fontSize: 11
  },
  textBlue: {
    fontSize: 10,
    color: '#3bbeb8'
  }
})

const mapStateToProps = ({ renter, map }) => {
  const { idStuff, stuffNearest } = renter
  const { address_latitude, address_longitude } = map

  return { idStuff, address_latitude, address_longitude, stuffNearest }
}

export default connect(mapStateToProps, { getStuffNearby })(ResultNearbyStuff)
