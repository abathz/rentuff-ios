import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  View,
  Dimensions,
  StyleSheet
} from 'react-native'
import { Actions } from 'react-native-router-flux'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { updateDataMap, updateDataRenter, getDataFromGeocoder } from 'actions'

let { width, height } = Dimensions.get('window')

const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.0042
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

class MapViews extends Component {
  selectedLocation (e, id) {
    var location = {
      lat: e.nativeEvent.coordinate.latitude,
      lng: e.nativeEvent.coordinate.longitude
    }
    this.props.updateDataMap({ prop: 'address_latitude', value: location.lat })
    this.props.updateDataMap({ prop: 'address_longitude', value: location.lng })
    this.props.updateDataRenter({ prop: 'idStuff', value: this.props.idStuff })
    this.props.getDataFromGeocoder(location, id)
  }

  componentDidMount () {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.props.updateDataMap({ prop: 'latitude', value: position.coords.latitude })
        this.props.updateDataMap({ prop: 'longitude', value: position.coords.longitude })
        this.props.updateDataMap({ prop: 'latitudeDelta', value: LATITUDE_DELTA })
        this.props.updateDataMap({ prop: 'longitudeDelta', value: LONGITUDE_DELTA })
      },
      (error) => console.log(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    )
    this.watchID = navigator.geolocation.watchPosition(
      position => {
        this.props.updateDataMap({ prop: 'latitude', value: position.coords.latitude })
        this.props.updateDataMap({ prop: 'longitude', value: position.coords.longitude })
        this.props.updateDataMap({ prop: 'latitudeDelta', value: LATITUDE_DELTA })
        this.props.updateDataMap({ prop: 'longitudeDelta', value: LONGITUDE_DELTA })
      },
      (error) => console.log(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    )
  }

  onRegionChange (region) {
    this.props.updateDataMap({ prop: 'region', value: region })
  }

  componentWillUnmount () {
    navigator.geolocation.clearWatch(this.watchId)
  }

  render () {
    const { idMap, region } = this.props

    const {
      container,
      map
    } = styles

    return (
      <View style={container}>
        {idMap === 1
          ? <MapView
            style={map}
            region={region}
            showsCompass={true}
            showsUserLocation={true}
            followsUserLocation={true}
            showsMyLocationButton={true}
            zoomEnabled={true}
            onRegionChange={this.onRegionChange.bind(this)}
          >
            <MapView.Marker
              coordinate={region}
              onSelect={e => this.selectedLocation(e, idMap)}>
            </MapView.Marker>
          </MapView>
          : <MapView
            style={map}
            region={region}
            showsCompass={true}
            showsUserLocation={true}
            followsUserLocation={true}
            showsMyLocationButton={true}
            zoomEnabled={true}
            onRegionChange={this.onRegionChange.bind(this)}
          >
            <MapView.Marker
              coordinate={region}
              onSelect={e => this.selectedLocation(e, idMap)}>
            </MapView.Marker>
          </MapView>
        }
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

const mapStateToProps = ({ map }) => {
  const { region } = map

  return { region }
}

export default connect(mapStateToProps, { updateDataMap, updateDataRenter, getDataFromGeocoder })(MapViews)
