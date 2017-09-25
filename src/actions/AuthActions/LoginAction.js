import { AsyncStorage } from 'react-native'
import axios from 'axios'
import qs from 'qs'
import {
  LOG_IN_UPDATE,
  LOG_IN_SUCCESS,
  LOG_IN_FAIL
} from 'actions/types'
import { Actions } from 'react-native-router-flux'

export const loginUserUpdate = ({ prop, value }) => {
  return {
    type: LOG_IN_UPDATE,
    payload: { prop, value }
  }
}

export const loginUser = (data) => {
  return (dispatch) => {
    axios.post('/login', qs.stringify(data), {
      headers: {
        'Version': '1044'
      }
    })
      .then(user => loginUserSuccess(dispatch, user))
      .catch(error => loginUserFail(dispatch, error))
  }
}

export const logOutUser = () => {
  return () => {
    AsyncStorage.getItem('api')
      .then(value => {
        axios.get('/logout', {
          headers: {
            'Authorization': `Bearer ${value}`
          }
        })
          .then(logOutUserSuccess())
      })
  }
}

const logOutUserSuccess = () => {
  AsyncStorage.clear().then(() => Actions.auth({ type: 'reset' }))
}

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOG_IN_SUCCESS,
    payload: user
  })
  AsyncStorage.setItem('api', user.data.api_token)
  AsyncStorage.setItem('firstName', user.data.profile.first_name)

  Actions.tabbar()
}

const loginUserFail = (dispatch, error) => {
  dispatch({
    type: LOG_IN_FAIL,
    payload: error.response
  })
}
