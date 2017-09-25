import axios from 'axios'
import {
  GET_GEOCODER,
  INCREMENT,
  DECREMENT,
  UPDATE_DATA_NEW_LENDING
} from 'actions/types'
import { Actions } from 'react-native-router-flux'

export const updateLendingData = ({ prop, value }) => {
  console.log({prop, value})
  return {
    type: UPDATE_DATA_NEW_LENDING,
    payload: { prop, value }
  }
}

export const createNewLending = (data) => {
  return () => {
    console.log(data)
  }
}

export const getDataFromGeocoder = (location) => {
  return (dispatch) => {
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}&key=AIzaSyBdbBEsykr_AAbXJMEksK737nWOivNHRs0`)
      .then(res => getDataFromGeocoderSuccess(dispatch, res))
  }
}

export const incrementStock = () => {
  return (dispatch) => {
    dispatch({
      type: INCREMENT
    })
  }
}

export const decrementStock = () => {
  return (dispatch) => {
    dispatch({
      type: DECREMENT
    })
  }
}

const getDataFromGeocoderSuccess = (dispatch, res) => {
  dispatch(updateLendingData({ prop: 'address_line', value: res.data.results[0].formatted_address }))
  dispatch(updateLendingData({ prop: 'address_state', value: res.data.results[0].address_components[5].long_name }))
  dispatch(updateLendingData({ prop: 'address_city', value: res.data.results[0].address_components[4].long_name }))
  Actions.pop()
}
