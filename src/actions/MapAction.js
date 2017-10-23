import axios from 'axios'
import { GET_GEOCODER } from './types'
import { Actions } from 'react-native-router-flux'

export const updateDataMap = ({ prop, value }) => {
  return {
    type: GET_GEOCODER,
    payload: { prop, value }
  }
}

export const getDataFromGeocoder = (location, id) => {
  if (id === 1) {
    return (dispatch) => {
      axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}&key=AIzaSyBdbBEsykr_AAbXJMEksK737nWOivNHRs0`)
        .then(res => getDataFromGeocoderSuccess(dispatch, res, id))
    }
  }

  return (dispatch) => {
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}&key=AIzaSyBdbBEsykr_AAbXJMEksK737nWOivNHRs0`)
      .then(res => getDataFromGeocoderSuccess(dispatch, res, id))
  }
}

const getDataFromGeocoderSuccess = (dispatch, res, id) => {
  if (id === 1) {
    dispatch(updateDataMap({ prop: 'address_line', value: res.data.results[0].formatted_address }))
    dispatch(updateDataMap({ prop: 'address_state', value: res.data.results[0].address_components[5].long_name }))
    dispatch(updateDataMap({ prop: 'address_city', value: res.data.results[0].address_components[4].long_name }))
    Actions.rootRenter()
  } else {
    dispatch(updateDataMap({ prop: 'address_line', value: res.data.results[0].formatted_address }))
    dispatch(updateDataMap({ prop: 'address_state', value: res.data.results[0].address_components[5].long_name }))
    dispatch(updateDataMap({ prop: 'address_city', value: res.data.results[0].address_components[4].long_name }))
    Actions.pop()
  }
}
