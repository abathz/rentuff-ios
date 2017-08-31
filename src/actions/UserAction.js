import axios from 'axios'
import qs from 'qs'
import {
  GET_USER_SUCCESS,
  EDIT_PROFILE_USER_UPDATE,
  EDIT_PROFILE_USER_SUCCESS
} from 'actions/types'
import { AsyncStorage } from 'react-native'
import { Actions } from 'react-native-router-flux'

export const getUserData = () => {
  return (dispatch) => {
    AsyncStorage.getItem('api')
      .then(value => {
        axios.get('/profile', {
          headers: {
            'Authorization': `Bearer ${value}`
          }
        })
          .then(user => {
            getUserSuccess(dispatch, user)
          })
          .catch(err => {
            console.log(err.response)
          })
      })
  }
}

export const editProfileUpdate = ({ prop, value }) => {
  console.log({ prop, value })
  return {
    type: EDIT_PROFILE_USER_UPDATE,
    payload: { prop, value }
  }
}

export const editProfile = (data) => {
  return (dispatch) => {
    AsyncStorage.getItem('api')
      .then(value => {
        axios.post('/profile/update', qs.stringify(data), {
          headers: {
            'Authorization': `Bearer ${value}`
          }
        })
          .then(editProfileSuccess(dispatch))
          .catch(err => console.log(err.response))
      })
  }
}

export const requestChangePhone = ({ phone }) => {
  return () => {
    AsyncStorage.getItem('api')
      .then(value => {
        axios.post('/profile/phone/requestchange', qs.stringify({ phone }), {
          headers: {
            'Authorization': `Bearer ${value}`
          }
        })
          .then(() => console.log('success'))
          .catch(err => console.log(err.response))
      })
  }
}

export const updateNewPhoneNumber = ({ phone, verification_code }) => {
  return () => {
    AsyncStorage.getItem('api')
      .then(value => {
        axios.post('/profile/phone/update', qs.stringify({ phone, verification_code }), {
          headers: {
            'Authorization': `Bearer ${value}`
          }
        })
          .then(() => console.log('success'))
          .catch(err => console.log(err.response))
      })
  }
}

const editProfileSuccess = (dispatch) => {
  dispatch({
    type: EDIT_PROFILE_USER_SUCCESS
  })
  Actions.pop()
}

const getUserSuccess = (dispatch, user) => {
  dispatch({
    type: GET_USER_SUCCESS,
    payload: user
  })
}
