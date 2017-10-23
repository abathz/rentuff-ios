import axios from 'axios'
import { AsyncStorage } from 'react-native'
import {
  UPDATE_DATA_RENTER,
  GET_STUFF_NEARBY_SUCCESS,
  GET_HOME_CATEGORY,
  GET_STUFF_RENTER_BY_CATEGORY,
  GET_DETAILS_STUFF_SUCCESS
} from 'actions/types'

export const updateDataRenter = ({ prop, value }) => {
  return {
    type: UPDATE_DATA_RENTER,
    payload: { prop, value }
  }
}

export const getHomeCategory = () => {
  return (dispatch) => {
    AsyncStorage.getItem('api')
      .then(value => {
        axios.get('/home_category', {
          headers: {
            'Authorization': `Bearer ${value}`
          }
        })
          .then(res => getHomeCategorySuccess(dispatch, res))
      })
  }
}

export const getStuffRenterByCategory = (id) => {
  return (dispatch) => {
    AsyncStorage.getItem('api')
      .then(value => {
        axios.get(`/rent/category/${id}`, {
          headers: {
            'Authorization': `Bearer ${value}`
          }
        })
          .then(res => getStuffRenterByCategorySuccess(dispatch, res))
      })
  }
}

export const getStuffNearby = (data) => {
  return (dispatch) => {
    AsyncStorage.getItem('valueSlider')
      .then(distance => {
        AsyncStorage.getItem('api')
          .then(value => {
            axios.get(`/rent/nearest?id_stuff=${data.idStuff}&address_latitude=${data.address_latitude}&address_longitude=${data.address_longitude}&min_distance=${distance}`, {
              headers: {
                'Authorization': `Bearer ${value}`
              }
            })
              .then(res => getStuffNearbySuccess(dispatch, res))
              .catch(err => console.log(err.response))
          })
      })
  }
}

export const getDetailsStuff = (id) => {
  return (dispatch) => {
    AsyncStorage.getItem('api')
      .then(value => {
        axios.get(`lend/detail?id_lend=${id}`, {
          headers: {
            'Authorization': `Bearer ${value}`
          }
        })
          .then(res => getDetailsStuffSuccess(dispatch, res))
      })
  }
}

const getHomeCategorySuccess = (dispatch, res) => {
  dispatch({
    type: GET_HOME_CATEGORY,
    payload: res
  })
}

const getStuffRenterByCategorySuccess = (dispatch, res) => {
  dispatch({
    type: GET_STUFF_RENTER_BY_CATEGORY,
    payload: res
  })
}

const getStuffNearbySuccess = (dispatch, res) => {
  console.log(res)
  dispatch({
    type: GET_STUFF_NEARBY_SUCCESS,
    payload: res
  })
}

const getDetailsStuffSuccess = (dispatch, res) => {
  console.log(res)
  dispatch({
    type: GET_DETAILS_STUFF_SUCCESS,
    payload: res
  })
}
