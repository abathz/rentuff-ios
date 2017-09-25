import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  View,
  Dimensions,
  StyleSheet
} from 'react-native'
import { Actions } from 'react-native-router-flux'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { updateLendingData, getDataFromGeocoder } from 'actions'

let { width, height } = Dimensions.get('window')

const ASPECT_RATIO = width / height
const LATITUDE = 0
const LONGITUDE = 0
const LATITUDE_DELTA = 0.0042
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

class MapViews extends Component {
  state = {
    region: {
      latitude: LATITUDE,
      longitude: LONGITUDE,
      latitudeDelta: 0,
      longitudeDelta: 0
    }
  }

  selectedLocation (e) {
    var location = {
      lat: e.nativeEvent.coordinate.latitude,
      lng: e.nativeEvent.coordinate.longitude
    }
    this.props.updateLendingData({ prop: 'address_latitude', value: location.lat })
    this.props.updateLendingData({ prop: 'address_longitude', value: location.lng })
    this.props.getDataFromGeocoder(location)
  }

  componentWillMount () {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA
          }
        })
      },
      (error) => console.log(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    )
    this.watchID = navigator.geolocation.watchPosition(
      position => {
        this.setState({
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA
          }
        })
      },
      (error) => console.log(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    )
  }

  onRegionChange (region) {
    this.setState({ region })
  }

  componentWillUnmount () {
    navigator.geolocation.clearWatch(this.watchId)
  }

  render () {
    const {
      container,
      map
    } = styles

    return (
      <View style={container}>
        <MapView
          style={map}
          region={this.state.region}
          showsCompass={true}
          showsUserLocation={true}
          followsUserLocation={true}
          showsMyLocationButton={true}
          zoomEnabled={true}
          onRegionChange={this.onRegionChange.bind(this)}
        >
          <MapView.Marker
            coordinate={this.state.region}
            onSelect={e => this.selectedLocation(e)}>
          </MapView.Marker>
        </MapView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    width: '100%',
    height: '100%'
  }
})

export default connect(null, { updateLendingData, getDataFromGeocoder })(MapViews)
